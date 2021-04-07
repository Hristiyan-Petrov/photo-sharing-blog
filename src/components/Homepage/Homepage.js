// import { Component } from "react";
import CategoryNavigation from '../CategoryNavigation/CategoryNavigation';

import './Homepage.css'

const Homepage = ({
    isAuthenticated,
    email
}) => {

    return (
        <section className="dashboard">
            {isAuthenticated
                // V zaglavieto podavam chastta ot email, izryazana do '@' s glavna bukva, kato username
                ? <h1 className="heading">Enjoy the world of aesthetic photography, {(email.substring(0, email.indexOf('@'))).charAt(0).toUpperCase() + (email.substring(0, email.indexOf('@'))).slice(1)}!</h1>
                : <h1 className="heading">Please login to browse photos!</h1>
            }
            {isAuthenticated
                ? <p className="selector">Browse the most aesthetic photos in the web</p>
                : null
            }
            

            <CategoryNavigation isAuthenticated={isAuthenticated} />

        </section>
    );

};

export default Homepage;