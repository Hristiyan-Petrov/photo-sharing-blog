import firebase from '../utils/firebase';

const db = firebase.firestore();

export const addPhoto = (imageURL, description, category, email) => {
    return db.collection('photos')
        .add({
            imageURL: imageURL.value,
            description: description.value,
            category: category.value,
            likes: 0,
            creator: email
        });
};

export const getAllFromCategory = async (cat) => {
    let photos = [];

    await db.collection('photos').get()
        .then(res => {
            res.forEach(photo => {
                if (photo.data().category == cat) {

                    let currentPhoto = {
                        imageURL: photo.data().imageURL,
                        description: photo.data().description,
                        category: photo.data().category,
                        likes: photo.data().likes,
                        id: photo.id
                    };

                    photos.push(currentPhoto);
                }
            })
        })

    return photos;
};

export const like = async (id, likes) => {

    await db.collection('photos')
        .doc(id)
        .update({
            likes
        })

    return db.collection('photos')
        .doc(id)
        .get();
}

export const getOne = (id) => {
    return db.collection('photos')
        .doc(id)
        .get();
}

