import React from 'react';
import './radio.css';

interface RadioProps {
    title: string;
    placeholder?: string;
}

const Radio = React.memo((props: RadioProps) => {
    const { title } = props;
    return (
        <div className='radio'>
            <div className='radio__title'>{title}</div>
            <div className='radio__options'>
                <label htmlFor="real">
                    <input type="radio" id="real" name="gender" value="real" className='radio__input' />
                    <span className='radio__label'>Real</span>
                </label>
                <label htmlFor="fantasy">
                    <input type="radio" id="fantasy" name="gender" value="fantasy" className='radio__input' />
                    <span className='radio__label'>Fantasy</span>
                </label>
            </div>
        </div>
    );
});

export default Radio;
