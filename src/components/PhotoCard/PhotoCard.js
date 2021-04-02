import './PhotoCard.css';

const PhotoCard = ({
    id,
    description,
    imageURL,
    category,
    likes
}) => {
    return (
        <li className="other-photo">
            <p className="img"><img src={imageURL} /></p>
            <p className="description">• {description} •</p>
            <div className="photo-info">
                <i className="fas fa-heart"></i> <span>Total likes: {likes}</span>
                <a><button className="button">Like!<i className="fas fa-heart"></i></button></a>
            </div>
        </li>
    );
};

export default PhotoCard;