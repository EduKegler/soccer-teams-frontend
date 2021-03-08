import React from 'react';
import SoccerField from '../soccerField/SoccerField';
import './pickStatistic.css';

interface PropsFromParent { 

}

const PickStatistic = React.memo((props: PropsFromParent) => {
  return (
    <div>
        <SoccerField layout='vertical' />
    </div>
  );
});

export default PickStatistic;
