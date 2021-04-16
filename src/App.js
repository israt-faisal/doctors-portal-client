
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import MakeAppointment from './Components/MakeAppointment/MakeAppointment/MakeAppointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddDoctor from './Components/AddDoctor/AddDoctor';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/makeAppointment">
            <MakeAppointment></MakeAppointment>
          </Route>
        
          <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  
  );
}

export default App;
