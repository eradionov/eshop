import React from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from './pages/home/home.component';
import Header from './components/header/header.component';
import { SignInAndUp } from './pages/sign-in-and-up/sign-in-and-up.component';
import { auth, userProfileSaver } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        return setCurrentUser(userAuth);
      }

      const userReference = await userProfileSaver(userAuth);

      userReference.onSnapshot(snapshot => {
        setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
        });
      });
    });
  }

  componentWillUnmount() {

    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="section">
          <div className="container">
              <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/sign-in" render={ () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndUp/>) }/> 
              </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
