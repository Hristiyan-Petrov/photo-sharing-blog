import { useState } from "react";
import * as authService from '../../../services/authService';
import '../Messages/Messages.css'

const Register = ({
    history
}) => {
    const [validationMessage, setMessage] = useState(null);

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const rePassword = e.target.rePassword.value;

        if (password != rePassword) {
            setMessage('Passwords should match.')
            return;
        }

        authService.register(email, password)
            .then(userCredential => {
                history.push('/');
            })
            .catch(res => {
                setMessage(res.message);
            });
    }

    let hasMessage = Boolean(validationMessage);

    return (
        <section className="create">
            <form onSubmit={onRegisterSubmitHandler}>
                <fieldset>
                    <legend>Register</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="rePassword">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="rePassword" id="rePassword" placeholder="Repeat Password" />
                        </span>
                        {hasMessage
                        ? <span className="message">{validationMessage}</span>
                        : null
                        }
                        <input className="button-submit" type="submit" value="Register" />
                    </p>

                </fieldset>
            </form>
        </section>
    );
};

export default Register;