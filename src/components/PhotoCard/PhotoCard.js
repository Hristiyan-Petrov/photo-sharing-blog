import { Component } from 'react';
import { Link } from "react-router-dom";
import * as photoService from "../../services/photoServise";
import './PhotoCard.css';

class PhotoCard extends Component {
    // description,
    // imageURL,
    // category,
    // likes
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="other-photo">
                <p className="img"><img src={this.props.imageURL} /></p>
                <p className="description">• {this.props.description} •</p>
                <div className="photo-info">
                    <Link className="button" to={`/photo/${this.props.id}`}>Open!</Link>
                </div>
            </li>
        );
    }

};

export default PhotoCard;