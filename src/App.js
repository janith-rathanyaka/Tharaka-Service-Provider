import TechnicianDash from "./pages/Technician/TechnicianDash.js";
import FoodDash from "./pages/Food/FoodDash.js";
import PlantDash from "./pages/Plant/PlantDash.js";
import Profile from "./pages/Profile/Profile.js";
import Report from "./pages/Report/Report.js";
import ClientDash from './pages/Client/ClientDash.js' 
import Search from './pages/Client/Search'

import ProfileClient from './pages/ClientProfile/Profile'

// import Newright from './components/Food/Newright/Newright'

import Table from './ta/Ta';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (

    
    <Router>
      <Switch>

      <Route exact path="/">
          {/* <ClientDash /> */}
        </Route>

      <Route path="/client">
          <ClientDash />
        </Route>

        <Route path="/report">
          <Report />
        </Route>

        <Route path="/technician">
          <TechnicianDash />
        </Route>

        <Route path="/food">
          <FoodDash />
        </Route>

        <Route path="/plant">
          <PlantDash />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/Clientprofile">
          <ProfileClient />
        </Route>

        <Route path="/search">
          <Search /> 
        </Route>

        <Route path="/tablenew">
          <Table /> 
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
