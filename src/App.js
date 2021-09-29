import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import profile from './images/profile.jpg'
import headerSVG from './images/HeaderSVG.svg'
import laptop from './images/laptop.png'
import mobile from './images/mobile.png'
import Header from './components/Header';
import Work from './components/Work';
import Servicess from './components/Servicess'
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';


function App() {
  return ( 
    <Router>
        <Navbar profile={profile}/>
        <Header headerSVG={headerSVG}/>
        <Work laptop= {laptop}  mobile= {mobile}/>
        <Servicess />
        <Testimonial />
        <Footer />
    </Router> 
  
  );
}

export default App;
