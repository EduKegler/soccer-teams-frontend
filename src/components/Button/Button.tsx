import React from 'react';
import './button.css';

interface PropsFromParent { 
    children?: React.ReactNode[] | string | any;
    onClick?: () => void;
}

const Button = React.memo((props: PropsFromParent) => {
  return (
    <div className='button' onClick={props.onClick}>
        {props.children}
    </div>
  );
});

export default Button;
