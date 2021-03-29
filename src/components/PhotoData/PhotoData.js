import { Component } from 'react';
import firebase from '../Firestore/Firestore'

class Photo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
            description: '',
            imageURL: '',
        };
    }

    updateInput(e) {
        // console.log(this.state);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addUser(e) {
        e.preventDefault();

        const db = firebase.firestore();

        // db.settings({
        //     timestampsInSnapshots: true
        // });

        const photo = db.collection('photos').add({
            category: this.state.category,
            description: this.state.description,
            imageURL: this.state.imageURL
        });

        this.setState({
            category: '',
            description: '',
            imageURL: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.addUser.bind(this)}>
                <label htmlFor="category">Category</label>
                <select
                    name="category"
                    onChange={this.updateInput.bind(this)}
                    value={this.state.category}
                >
                    <option name="beach">beach</option>
                    <option name="mountain">mountain</option>
                    <option name="food">food</option>
                    <option name="cars">cars</option>
                </select>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={this.updateInput.bind(this)}
                    value={this.state.description}
                />
                <input
                    type="text"
                    name="imageURL"
                    placeholder="imageURL"
                    onChange={this.updateInput.bind(this)}
                    value={this.state.imageURL}
                />
                <button type="submit">Submit</button>
            </form>
        );
    };
};

export default Photo;