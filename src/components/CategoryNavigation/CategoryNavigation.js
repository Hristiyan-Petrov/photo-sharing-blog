import { Link } from 'react-router-dom';
import './CategoryNavigation.css'

const CategoryNavigation = ({
    isAuthenticated,
}) => {
    return (
        <nav className="navbar">
            {isAuthenticated
                ?
                <ul className="cat-nav-ul">
                    <li><Link to="/photos/beaches">Beaches</Link></li>
                    <li><Link to="/photos/mountains">Mountains</Link></li>
                    <li><Link to="/photos/food">Food</Link></li>
                    <li><Link to="/photos/cars">Cars</Link></li>
                    <li><Link to="/photos/animals">Animals</Link></li>
                    <li><Link to="/photos/architecture">Architecture</Link></li>
                </ul>
                : null
            }

        </nav>
    );
};

export default CategoryNavigation;