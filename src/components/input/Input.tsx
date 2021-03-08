import React from 'react';
import './input.css';

interface InputProps { 
    title: string;
    placeholder?: string;
}

const Input = React.memo((props: InputProps) => {
    const { title, placeholder } = props;
    return (
        <div className='input'>
            <input className='input__field' placeholder={placeholder}/>
            <label className='input__label'>{title}</label>
        </div>
    );
});

export default Input;
