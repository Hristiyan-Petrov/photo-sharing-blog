import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXfwHJ06dqnuK4h8ys7MXx7Njc0-vfF1U",
    authDomain: "photo-sharing-blog.firebaseapp.com",
    projectId: "photo-sharing-blog",
    storageBucket: "photo-sharing-blog.appspot.com",
    messagingSenderId: "240332161628",
    appId: "1:240332161628:web:e2183f3f805d4d1ca4dc99"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;