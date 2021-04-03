import { useEffect, useState } from 'react';
import * as photoService from '../../services/photoServise';
import './LikePage.css';

const LikePage = ({
    match
}) => {
    let [photo, setPhoto] = useState({});

    useEffect(() => {
        photoService.getOne(match.params.photoID)
            .then(res => {
                setPhoto(res.data());
            })
    }, []);

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
                    <button className="button" onClick={onLikeButtonClickHandler}>Like!</button>
                </div>

            </section>
        </div>
    )
};

export default LikePage;