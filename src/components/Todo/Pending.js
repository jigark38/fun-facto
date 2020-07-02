import React from 'react';
import TodoItem from './TodoItem';

const Pending = ({ todos, clickItem }) => {

    return (
        <div className="block-1">
            <span className="block-label pending-label"> Pending </span>
            <span className="block-label pending-counter-label"> {todos.length} </span>
            <div className="block-list">
                {(() => {
                    if (todos.length === 0)
                        return <div className="noData"> No Data </div>
                    else
                        return todos.map(todo => <TodoItem item={todo} isChecked={false} key={todo.id} clickItem={clickItem} className={todo.className} />)
                })()}

            </div>
        </div>
    );
};

export default Pending;