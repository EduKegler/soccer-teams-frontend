import React from 'react';
import './content.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import TeamForm from '../team-form/TeamForm';
import { pathRoutes } from '../../PathRoutes';

const Content = React.memo(() => {
  return (
    <div className="content">
      <Router>
        <Switch>
          <Route path={pathRoutes.dashboard} >
            <Dashboard />
          </Route>
          <Route path={pathRoutes.teamForm}>
            <TeamForm />
          </Route>
          <Redirect path="/" to={pathRoutes.dashboard} />
        </Switch>
      </Router>
    </div>
  );
});

export default Content;
