import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import profile from './images/profile1.webp'
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return ( 
    <Router>
      <Navbar profile={profile}/>
      
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/about'>
          <AboutPage />
        </Route>

        <Route path='/projects'>
          <ProjectsPage />
        </Route>

        <Route path='/services'>
          <ServicesPage />
        </Route>
        
      </Switch>

        <Footer profile={profile}/>
    </Router> 
  
  );
}

export default App;
