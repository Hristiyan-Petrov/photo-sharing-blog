import './Category.css';
import { Component } from "react";
import * as photoService from "../../services/photoServise";
import PhotoCard from '../PhotoCard/PhotoCard';

class Category extends Component {
    constructor(props) {
        super(props);

        let category = props.match.params.category;
        let firstLetterCapital = category.charAt(0).toUpperCase();
        let heading = firstLetterCapital + category.substring(1);

        this.state = {
            //heading == category but with first capital letter
            clickedCategory: heading,
            heading,
            photos: [],
            category
        }
    }

    componentDidMount() {
        let allPhotos = [];

        photoService.getAll(this.state.category)
            .then(res => {
                res.forEach(photo => {
                    if (photo.data().category == this.state.clickedCategory) {
                        let currentPhoto = {
                            imageURL: photo.data().imageURL,
                            description: photo.data().description,
                            category: photo.data().category,
                            likes: photo.data().likes,
                            id: photo.id
                        };
                        allPhotos.push(currentPhoto);

                        // allPhotos.push(photo.data());
                    }
                });
                this.setState({ photos: allPhotos })
            });
    };


    render() {
        return (
            <div className="categories">
                <h1 className="heading">{this.state.heading}</h1>

                <ul className="photos-list">
                    {this.state.photos.map(x =>
                        // console.log(x.category)
                        <PhotoCard key={x.imageURL} {...x} />
                    )}
                </ul>

            </div>
        );
    }
}

export default Category;


