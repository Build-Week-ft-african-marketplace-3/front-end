import React from 'react';
import './App.css';
import './Components/HomePage.css';
import './Components/SignUp.css';
import './Components/AddItem.css'
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import SignUp from './Components/SignUp';
import { Route, Redirect} from "react-router-dom";
import LogIn from './Components/LogIn';
import Listing from './Components/Listing';
import AddItem from './Components/AddItem';
import PrivateRoute from './utils/PrivateRoute';
import Logout from './Components/Logout';

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
      <PrivateRoute path="/listings" component={Listing} />

      <PrivateRoute path="/add" component={AddItem} />
      
      <PrivateRoute path="/logout" component={Logout}/>

    </div>
  );
}

export default App;
