import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import  Home from './Home';
import  Education from './Education';
import Projects from './Projects';

function App() {

    return (
        <Router>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/education">
        <Education />
        </Route>
        <Route exact path="/projects">
        <Projects />
        </Route>
        <Route exact path="/landing-page">
        <LandingPage />
        </Route>
        </Router>
  
  
    );
  }
  
  export default App;