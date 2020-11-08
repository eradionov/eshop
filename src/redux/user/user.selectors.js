import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectAuthenticatedUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);