import React from 'react';

const PopOver = ({popRef, closePopupHandler}) => {

    return (
        <div className="popup" ref={popRef}>
            <span className="close-popup" onClick={closePopupHandler}>X</span>
        </div>
    );
}

export default PopOver;