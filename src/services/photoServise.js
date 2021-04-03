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

export const getAll = (cat) => {
    //let photos = [];

    return db.collection('photos').get()

    // .then(res => {
    //     res.forEach(photo => {
    //         if (photo.data().category == cat) {
    //             photos.push(photo.data());
    //         }
    //     })
    //     return photos;
    // })
};

// export const getOne = async (imageURL) => {
//     let searchedPhoto = null;
//     await db.collection('photos').get()
//         .then(res => {
//             res.forEach(photo => {
//                 if (photo.data().imageURL == imageURL)
//                     searchedPhoto = photo.data();
//             })
//         });
//     return searchedPhoto;
// };

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