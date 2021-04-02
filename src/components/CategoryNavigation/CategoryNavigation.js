import { Link } from 'react-router-dom';
import './CategoryNavigation.css'

const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul className="cat-nav-ul">
                <li><Link to="/beaches">Beaches</Link></li>
                <li><Link to="/mountains">Mountains</Link></li>
                <li><Link to="/food">Food</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/animals">Animals</Link></li>
                <li><Link to="/architecture">Architecture</Link></li>
            </ul>
        </nav>
    );
};

export default CategoryNavigation;