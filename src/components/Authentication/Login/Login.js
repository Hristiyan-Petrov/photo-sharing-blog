import { useState } from "react";
import * as authService from '../../../services/authService';

const Login = ({
   history
}) => {
   const [validationMessage, setMessage] = useState(null);

   const onLoginSubmitHandler = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      authService.login(email, password)
         .then(userCredential => {
            history.push('/')
         })
         .catch(res => {
            console.log(res.message)
            setMessage(res.message);
         });
   }

   let hasMessage = Boolean(validationMessage);

   return (
      <section className="create">
         <form onSubmit={onLoginSubmitHandler}>
            <fieldset>
               <legend>Login</legend>
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
                  {hasMessage
                     ? <span className="message">{validationMessage}</span>
                     : null
                  }
                  <input className="button-submit" type="submit" value="Login" />
               </p>

            </fieldset>
         </form>
      </section>
   );
};

export default Login;