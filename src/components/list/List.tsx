import React from 'react';
import './list.css';

interface PropsFromParent {
    title: string;
    data: { key: string, value: string }[];
}

const List = React.memo((props: PropsFromParent) => {
    return (
        <div className="list">
            <div className="list__header">
                <div className="list__title">
                    <h4>{props.title}</h4>
                </div>
            </div>
            <div className='list__content'>
                {props.data.map((e, index) =>
                    <div key={index} className='list__row'>
                        <span className='list__key'>{e.key}</span>
                        <span className='list__value'><b>{e.value}</b></span>
                    </div>)}
            </div>
        </div>
    );
});

export default List;
