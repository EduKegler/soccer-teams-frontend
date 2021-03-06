import React from 'react';
import { useHistory } from 'react-router';
import { pathRoutes } from '../../PathRoutes';
import Button from '../Button/Button';
import Card from '../card/Card';
import List from '../list/List';
import { highestAvgAge, lowestAvgAge } from '../mockItems';
import PickStatistic from '../pickStatistic/pickStatistic';
import TeamList from '../team-list/TeamList';
import './dashboard.css';

const Dashboard = React.memo(() => {

  const history = useHistory();

  const redirectToForm = () => { 
    history.push(pathRoutes.teamForm)
  };

  return (
    <div className="dashboard">
      <div className="dashboard__team">
        <Card title="My Teams" extra={<Button onClick={redirectToForm}>+</Button>}>
          <TeamList />
          
        </Card>
      </div>
      <div className="dashboard__top">
        <Card title="Top 5">
          <div className="dashboard__averages">
            <List title="Highest avegage age" data={highestAvgAge} />
            <List title="Lowest avegage age" data={lowestAvgAge} />
          </div>
        </Card>
        <PickStatistic />
      </div>
    </div>
  );
});

export default Dashboard;
