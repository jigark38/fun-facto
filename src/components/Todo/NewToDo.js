import React from 'react';

const NewToDo = ({ handleInputChange, handleSubmit, handleKeyPress, handleClear, todoName }) => {

    return (
        <div className="footer">
            <div className="footer-inside">
                <div><input type="text" onChange={handleInputChange} value={todoName} onKeyPress={handleKeyPress} /></div>
                <div><button type="submit" onClick={handleSubmit}> Submit </button></div>
                <div><button type="submit" onClick={handleClear}> Cancel </button></div>
            </div>
        </div>

    );
}

export default NewToDo;