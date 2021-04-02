import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import PhotoData from './components/PhotoData/PhotoData';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import About from "./components/About/About";
import AddPhoto from "./components/AddPhoto/AddPhoto";
import Category from "./components/Category/Category";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/about" component={About}/>
        <Route path="/add-photo" component={AddPhoto} />
        <Route path="/:category" component={Category} />
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
