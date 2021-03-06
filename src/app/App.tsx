import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppointmentsOverview from './pages/AppointmentsOverview/AppointmentsOverview';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile';
import Home from './pages/Home/Home';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/doctor/:id">
          <DoctorProfile />
        </Route>
        <Route path="/overview">
          <AppointmentsOverview />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
