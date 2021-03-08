import React from 'react';
import './textarea.css';

interface TextareaProps { 
    title: string;
    placeholder?: string;
}

const Textarea = React.memo((props: TextareaProps) => {
    const { title, placeholder } = props;
    return (
        <div className='textarea'>
            <textarea className='textarea__field' placeholder={placeholder}/>
            <label className='textarea__label'>{title}</label>
        </div>
    );
});

export default Textarea;
