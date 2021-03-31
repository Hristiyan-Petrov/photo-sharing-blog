import { Link } from "react-router-dom";
import logo from './logo.png';
import './Header.css';

const Header = () => {
    return (
        <header id="site-header">
            <nav className="navbar">

                <section className="navbar-dashboard">
                    <div className="first-bar">

                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                        <Link className="button" to="/add-photo">Add your photo here</Link>
                        <Link className="button" to="/about">About</Link>
                    </div>
                    <div className="second-bar">
                        <ul>
                            <li><a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                            <li><a href="#"><i className="fas fa-user-plus"></i> Register</a></li>
                            <li><a href="#"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                        </ul>
                    </div>
                </section>
                {/* <section className="navbar-anonymous">
                    <ul>
                        <li><a href="#"><i className="fas fa-user-plus"></i> Register</a></li>
                        <li><a href="#"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                    </ul>
                </section> */}
            </nav>
        </header>
    );
};

export default Header;