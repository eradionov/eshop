import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmA12wM3RghP5a4BZWV2rca5KiNzOFV6I",
    authDomain: "e-shop-8c95c.firebaseapp.com",
    databaseURL: "https://e-shop-8c95c.firebaseio.com",
    projectId: "e-shop-8c95c",
    storageBucket: "e-shop-8c95c.appspot.com",
    messagingSenderId: "679841868596",
    appId: "1:679841868596:web:c76ca4d13d6553004d5361",
    measurementId: "G-LT5K1VVDFM"
  };

firebase.initializeApp(config);

export const userProfileSaver = async (userAuth, data) => {
    if (!userAuth) {
        return;
    }

    const userReference = firestore.doc(`user/${ userAuth.uid }`),
        userSnapshot = await userReference.get();

    if (!userSnapshot.exists) {
         const { displayName, email } = userAuth,
            createdAt = new Date();
        
        try {
            await userReference.set({
                displayName,
                email,
                createdAt,
                ...data
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    return userReference;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;