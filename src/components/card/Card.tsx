import React from 'react';
import './card.css';

interface PropsFromParent { 
    title: string;
    extra?: React.ReactNode[] | string | any;
    children?: React.ReactNode[] | string | any;
}

const Card = React.memo((props: PropsFromParent) => {
  return (
    <div className="card">
        <div className="card__header">
            <div className="card__title"> 
                <h2>{props.title}</h2>
            </div>
            <div className="card__extra"> 
                {props.extra}
            </div>
        </div>
        <div className='card__content'>
            {props.children}
        </div>
    </div>
  );
});

export default Card;
