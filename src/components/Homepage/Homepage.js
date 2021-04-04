import { Component } from "react";
import CategoryNavigation from '../CategoryNavigation/CategoryNavigation';

import './Homepage.css'

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="dashboard">
                <h1 className="heading">Enjoy the world of aesthetic photography</h1>
                <p className="selector">Select category to continue!</p>

                <CategoryNavigation />
                    
            </section>
        );
    };
    
};

export default Homepage;