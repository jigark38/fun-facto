import React from 'react';

const TodoItem = ({ item, isChecked, clickItem }) => {

    function itemClickhandler() {
        if (typeof clickItem !== 'undefined')
            clickItem(item.id);
    }

    return (
        <div onClick={itemClickhandler} className={item.className}>
            <input type="checkbox" checked={isChecked} /> <label>{item.name}</label>
        </div>
    );
};

export default TodoItem;