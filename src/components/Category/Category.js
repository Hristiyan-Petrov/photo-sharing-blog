import './Category.css';
import { Component } from "react";
import * as photoService from "../../services/photoServise";
import PhotoCard from '../PhotoCard/PhotoCard';

class Category extends Component {
    constructor(props) {
        super(props);

        if (props.match.url != '/my-photos') {
            let category = props.match.params.category;
            let firstLetterCapital = category.charAt(0).toUpperCase();
            let heading = firstLetterCapital + category.substring(1);

            this.state = {
                //heading == category but with first capital letter
                heading,
                photos: [],
            }
        } else {
            // reuse component for 'my-photos' url
            this.state = {
                heading: 'My photos',
                photos: []
            }
        }
    }

    componentDidMount() {
        if (this.props.match.url != '/my-photos') {
            photoService.getAllFromCategory(this.state.heading)
                .then(res => {
                    this.setState({ photos: res })
                });
        } else {
            photoService.getAllFromUser(this.props.email)
                .then(res => {
                    console.log(this.state.heading);
                    this.setState({ photos: res })
                });
        }
    }

    componentDidUpdate() {
        if (this.props.match.url != '/my-photos') {
            photoService.getAllFromCategory(this.state.heading)
                .then(res => {
                    this.setState({ photos: res })
                });
        } else {
            photoService.getAllFromUser(this.props.email)
                .then(res => {
                    this.setState({ heading: 'My photos', photos: res })
                });
        }
    }

    render() {
        return (
            <div className="categories">
                <h1 className="heading">{this.state.heading}</h1>

                <ul className="photos-list">
                    {this.state.photos.map(photo =>
                        <PhotoCard key={photo.imageURL} {...photo} />
                    )}
                </ul>

            </div>
        );
    }
}

export default Category;


