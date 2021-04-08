import { Redirect, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import About from "./components/About/About";
import AddPhoto from "./components/AddPhoto/AddPhoto";
import Category from "./components/Category/Category";
import MyPhotos from "./components/Category/MyPhotos";
import LikePage from "./components/LikePage/LikePage";
import Login from "./components/Authentication/Login/Login"
import Register from "./components/Authentication/Register/Register"

import firebase from './utils/firebase';
import './App.css';

function App() {
   const[user, setUser] = useState(null);

   useEffect(() => {
      firebase.auth().onAuthStateChanged(setUser);
   }, [])

   const authInfo = {
      isAuthenticated: Boolean(user),
      email: user?.email
   };

   return (
      <div className="App">
         <Header isAuthenticated={authInfo.isAuthenticated} />

         <Switch>
            <Route path="/" exact render={props => <Homepage {...props} {...authInfo}/>} />
            <Route path="/about" component={About} />
            <Route path="/add-photo" render={props => <AddPhoto {...props} email={authInfo.email} />} />
            <Route path="/photos/:category" component={Category} />
            <Route path="/photo/:photoID" render={props => <LikePage {...props} email={authInfo.email} />} />
            <Route path="/my-photos" render={props => <MyPhotos {...props} email={authInfo.email} />} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" render={() => {
               firebase.auth().signOut();
               return <Redirect to="/" />
            }} />
         </Switch>

         <Footer />
      </div>
   );
}

export default App;
