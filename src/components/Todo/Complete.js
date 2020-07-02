import React from 'react';
import TodoItem from './TodoItem';
import './todo.scss';

const Complete = ({todos, clickItem}) => {
    return(
        <div className="block-2">
        <span className="block-label complete-label"> Complete </span>
        <div className="block-list">
            {(() =>{
                if (todos.length === 0)
                return <div className="noData"> No Data </div>
                else 
                return todos.map(todo => <TodoItem item={todo} isChecked={true} key={todo.id} clickItem={clickItem} />)
         })()}
        </div>
        </div>
    );
};

export default Complete;