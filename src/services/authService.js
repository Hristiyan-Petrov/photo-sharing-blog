import firebase from '../utils/firebase';

export const login = (username, password) => {
    return firebase.auth().signInWithEmailAndPassword(username, password);
};

export const register = (username, password) => {
    return firebase.auth().createUserWithEmailAndPassword(username, password)
};