import { useEffect, useState } from 'react';
import * as photoService from '../../services/photoServise';
import './LikePage.css';

const LikePage = ({
    match,
    email
}) => {
    let [photo, setPhoto] = useState({});

    useEffect(() => {
        photoService.getOne(match.params.photoID)
            .then(res => {
                setPhoto(res.data());
            })
    }, []);

    //used for creator he can't like his own photos
    let imCreator = Boolean(photo.creator == email);

    const onLikeButtonClickHandler = () => {
        let increasedLikes = photo.likes + 1;
        photoService.like(match.params.photoID, increasedLikes)
            .then(res => {
                setPhoto(res.data());
            })
    };

    return (
        <div>
            <section className="like-section">
                <div className="p-like">
                    <img className="like-image" src={photo.imageURL} alt='photo' />
                </div>
                <div>
                    <p className="like-description">• {photo.description} •</p>
                    <span className="likes-counter">Total likes: {photo.likes}</span>
                    {imCreator
                        ? null
                        : <button className="button" onClick={onLikeButtonClickHandler}>Like!</button>
                    }
                    {imCreator
                        ? <p className="photo-creator">Created by you!</p>
                        : <p className="photo-creator">Creator: {photo.creator}</p>
                    }
                </div>

            </section>
        </div>
    )
};

export default LikePage;