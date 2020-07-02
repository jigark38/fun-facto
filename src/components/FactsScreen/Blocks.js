import React from 'react';

const Blocks = ({ children }) => (
    <div className="container">
        <div className="factLayout">
            <div className="blocks">
                <div className="parent-block" >
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default Blocks;