import { Link } from 'react-router-dom';
import './CategoryNavigation.css'

const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul className="cat-nav-ul">
                <li><Link to="/photos/beaches">Beaches</Link></li>
                <li><Link to="/photos/mountains">Mountains</Link></li>
                <li><Link to="/photos/food">Food</Link></li>
                <li><Link to="/photos/cars">Cars</Link></li>
                <li><Link to="/photos/animals">Animals</Link></li>
                <li><Link to="/photos/architecture">Architecture</Link></li>
            </ul>
        </nav>
    );
};

export default CategoryNavigation;