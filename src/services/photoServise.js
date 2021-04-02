import firebase from '../components/Firestore/Firestore';

const db = firebase.firestore();

export const addPhoto = (imageURL, description, category) => {
    return db.collection('photos')
        .add({
            imageURL: imageURL.value,
            description: description.value,
            category: category.value,
            likes: 0
        });
};

export const getAll = () => {
    return db.collection('photos').get()
};