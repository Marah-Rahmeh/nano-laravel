
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Fragment } from 'react';
import About from './Components/About';
import Footer from './Components/Footer';
import Subscribe from './Components/Subscribe';
import Service from './Components/Service';

function App() {
  return (
    <Fragment>
   <Navbar/>
   <Home/>
   <About/>
   <Service/>
   <Subscribe/>
   <Footer/>
   </Fragment>
  );
}


export default App;
