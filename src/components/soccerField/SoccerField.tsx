import React from 'react';
import './soccerField.css';

interface PropsFromParent { 
  layout?: 'vertical' | 'horizontal';
}

const SoccerField = React.memo((props: PropsFromParent) => {
  const { layout } = props;
  const isVertical = layout === 'vertical' ? ' soccer-field__vertical' : '';
  
  return (
    <div className={`soccer-field${isVertical}`}>
        <div className='soccer-field__circle-divider' />
        <div className='soccer-field__vertical-divider' />
    </div>
  );
});

export default SoccerField;
