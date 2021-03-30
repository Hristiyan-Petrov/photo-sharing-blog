import { Link } from 'react-router-dom';
import './CategoryNavigation.css'

const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/categories/beaches">Beaches</Link></li>
                <li><Link to="/categories/mountains">Mountains</Link></li>
                <li><Link to="/categories/food">Food</Link></li>
                <li><Link to="/categories/cars">Cars</Link></li>
                <li><Link to="/categories/animals">Animals</Link></li>
                <li><Link to="/categories/architecture">Architecture</Link></li>
            </ul>
        </nav>
    );
};

export default CategoryNavigation;