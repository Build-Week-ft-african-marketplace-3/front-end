import './App.css';
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LogIn from './Components/LogIn';
import Listing from './Components/Listing';

function App() {
  return (
    <div className="App">
       <Router> 
      <NavBar />
        <Route path="/" component={HomePage}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={LogIn} />
        <Route path="/listing" component={Listing}/>
      </Router>
    </div>
  );
}

export default App;
