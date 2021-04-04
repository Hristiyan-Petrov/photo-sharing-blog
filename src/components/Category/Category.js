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
            heading,
            photos: [],
        }
    }

    componentDidMount() {
        photoService.getAllFromCategory(this.state.heading)
            .then(res => {
                this.setState({ photos: res })
            });
    };


    render() {
        return (
            <div className="categories">
                <h1 className="heading">{this.state.heading}</h1>

                <ul className="photos-list">
                    {this.state.photos.map(x =>
                        <PhotoCard key={x.imageURL} {...x} />
                    )}
                </ul>

            </div>
        );
    }
}

export default Category;


