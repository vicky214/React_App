import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/users/Login';
import Register from './components/users/Register';
import Welcome from './components/auth/welcome';
import Home from './components/layout/Navhome';
import Dashboard from './components/admin/Dashboard/Dashboard';
import Team from './components/admin/teams/Team';
import AllUser from './components/admin/Users/AllUsers';
import InactiveUser from './components/admin/Users/InactiveUser';
import Role from './components/admin/roles/Role';
import Department from './components/admin/departments/department';
import Allshift from './components/admin/shifts/Allshift';
// import PrivateRoute from './privateRouter/PrivateRoute'
import {connect} from 'react-redux'


function App() {
  return (
   <BrowserRouter>
   <Switch>
     {/* <Route path="/try" component={Try} /> */}
     {/* <Route path="/hoome" component={hoome} /> */}
     <Route exact path="/" component={Welcome} />
     <Route path = "/login" component={Login} />
     <Route path = "/register" component={Register} />
     <Route path = "/home" component={Home} />
     <Route path = "/admindashboard" component={Dashboard} />
     <Route path = "/adminteam" component={Team} />
     <Route path = "/alluser" component={AllUser} />
     <Route path = "/inactiveuser" component={InactiveUser} />
     <Route path = "/role" component={Role} />
     <Route path = "/department" component={Department} />
     <Route path = "/allshift" component={Allshift} />

     {/* <PrivateRoute exact path="/admindashboard" component={Dashboard} scope={["admin"]} />
     <PrivateRoute exact path="/adminteam" component={Team} scope={["admin"]} />
     <PrivateRoute exact path="/alluser" component={AllUser} scope={["admin"]} />
     <PrivateRoute exact path="/inactiveuser" component={InactiveUser} scope={["admin"]} />
     <PrivateRoute exact path="/role" component={Role} scope={["admin"]} />
     <PrivateRoute exact path="/department" component={Department} scope={["admin"]} />
     <PrivateRoute exact path="/allshift" component={Allshift} scope={["admin"]} /> */}



   </Switch>
   </BrowserRouter>
  );
}

export default connect(null)(App);