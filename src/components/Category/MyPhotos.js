import './Category.css';
import { Component } from "react";
import { Link } from "react-router-dom";
import * as photoService from "../../services/photoServise";
import PhotoCard from '../PhotoCard/PhotoCard';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heading: 'My photos',
            photos: [],
            noPhotos: false
        }
    }

    componentDidMount() {
        photoService.getAllFromUser(this.props.email)
            .then(res => {
                console.log(this.state.heading);
                this.setState({ heading: 'My photos', photos: res, noPhotos: Boolean(!this.state.photos.length) })
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate() {
        photoService.getAllFromUser(this.props.email)
            .then(res => {
                this.setState({ heading: 'My photos', photos: res, noPhotos: Boolean(!this.state.photos.length) })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="categories">
                <h1 className="heading">{this.state.heading}</h1>

                <ul className="photos-list">
                    {this.state.noPhotos
                        ? <div>
                            <p className="no-photos">You have no photos yet :(</p>
                            <p className="no-photos">You can add photography from <Link className="link-button" to="/add-photo">here</Link></p>
                        </div>
                        : this.state.photos.map(photo =>
                            <PhotoCard key={photo.imageURL} {...photo} />
                        )
                    }
                    {/* {this.state.photos.map(photo =>
                        <PhotoCard key={photo.imageURL} {...photo} />
                    )} */}
                </ul>

            </div>
        );
    }
}

export default Category;
