import React from 'react';
import './tag.css';

interface TagProps {
    title: string;
    tags: string[];
    onInsert: React.Dispatch<React.SetStateAction<string[]>>;
}

const Tag = React.memo((props: TagProps) => {
    const { title, tags, onInsert } = props;

    const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value !== '') {
            onInsert([...tags, e.currentTarget.value]);
            e.currentTarget.value = ''
        }
        console.log(e);

        if (e.key === 'Backspace' && e.currentTarget.value === '') {
            onInsert([...tags.filter((_, i) => i !== tags.length - 1)]);
        }
    }

    const removeTag = (index: number) => () => {
        onInsert([...tags.filter((_, i) => i !== index)]);
    };

    return (
        <div className='tag'>
            <div className='tag__container'>
                {tags.map((tag, index) => <span key={index} className="tag__box">{tag}
                    <span className="tag__close" onClick={removeTag(index)}>x</span>
                </span>)}
                <input onKeyDown={handlePressKey} className='tag__input'></input>
            </div>
            <label className='tag__title'>{title}</label>
        </div>
    );
});

export default Tag;
