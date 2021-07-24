import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import  Home from './Home';

function App() {

    return (
        <Router>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/landing-page">
        <LandingPage />
        </Route>
        </Router>
  
  
    );
  }
  
  export default App;