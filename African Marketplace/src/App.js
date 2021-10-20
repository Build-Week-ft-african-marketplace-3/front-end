import './App.css';
import './Components/HomePage.css';
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import SignUp from './Components/SignUp';
import { Route, Redirect} from "react-router-dom";
import LogIn from './Components/LogIn';
import Listing from './Components/Listing';
import AddItem from './Components/AddItem';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/home" component={HomePage}/>
      <Route path="/">
        <Redirect to="/home" component={HomePage}/> 
        </Route>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={LogIn} />
      <Route path="/listings" component={Listing} />
      <Route path="/addlisting" component={AddItem}/>
    </div>
  );
}

export default App;
