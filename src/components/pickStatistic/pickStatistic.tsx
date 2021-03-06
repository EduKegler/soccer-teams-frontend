import React from 'react';
import './pickStatistic.css';

interface PropsFromParent { 

}

const PickStatistic = React.memo((props: PropsFromParent) => {
  return (
    <div className="picks">
        <div className='picks__circle-divider' />
        <div className='picks__vertical-divider' />
    </div>
  );
});

export default PickStatistic;
