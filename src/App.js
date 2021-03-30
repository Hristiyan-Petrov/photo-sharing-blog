import Header from './components/Header/Header';
import PhotoData from './components/PhotoData/PhotoData';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      {/* <PhotoData /> */}
      <Footer/>
    </div>
  );
}

export default App;
