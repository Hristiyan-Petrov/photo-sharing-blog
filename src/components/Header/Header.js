import { Link } from "react-router-dom";
import logo from './logo.png';
import './Header.css';

const Header = ({
    isAuthenticated,
    email
}) => {
    return (
        <header id="site-header">
            <nav className="navbar">

                <section className="navbar-dashboard">
                    <div className="first-bar">

                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                        <Link className="button" to="/about">About</Link>
                        {isAuthenticated
                            ? <Link className="button" to="/add-photo">Add your photo here</Link>
                            : null
                        }
                        {isAuthenticated
                            ? <Link className="button" to="/your-photos">Your photos</Link>
                            : null
                        }
                    </div>
                    <div className="second-bar">
                        <ul>
                            {isAuthenticated
                                ? <Link className="auth-button" to="/logout">Logout</Link>
                                : <div>
                                    <Link className="auth-button" to="/login">Login</Link>
                                </div>
                            }

                            {isAuthenticated
                                ? null
                                : <Link className="auth-button" to="/register">Register</Link>
                            }
                            {/* <Link className="auth-button" to="/login">Login</Link>
                            <Link className="auth-button" to="/register">Register</Link>
                            <Link className="auth-button" to="/logout">Logout</Link> */}
                        </ul>
                    </div>
                </section>
            </nav>
        </header>
    );
};

export default Header;