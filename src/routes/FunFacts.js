import React from 'react';
import './facts.scss';


class FunFacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
    }

    render() {
        return (
            <div className="container">
                <div className="factLayout">
                    <div className="blocks">
                        {/* <div className="side-block">
                            <div>Prev</div>
                        </div> */}

                        <div className="parent-block">
                            <div className="block main-block block-1">
                                <div className="block-title">
                                <h4>Title of 1</h4>

                                </div>
                                <div className="blocks-description">
                                    <span>Description of 1</span>
                                </div>
                                <div className="block-footer">
                                    {/* <button className="more"> More </button> */}
                                </div>
                            </div>

                            <div className="block main-block block-2">
                                <div className="block-title">
                                <h4>Title of 2</h4>

                                </div>
                                <div className="blocks-description">
                                    <span>Description of 1</span>
                                </div>
                                <div className="block-footer">
                                    <button className="more"> More </button>
                                </div>
                            </div>

                            <div className="block main-block block-3">
                                <div className="block-title">
                                    <h4>Title of 3</h4>
                                </div>
                                <div className="blocks-description">
                                    <span>Description of 1</span>
                                </div>
                                <div className="block-footer">
                                    {/* <button className="more"> More </button> */}
                                </div>
                            </div>

                        </div>

                        {/* <div className="side-block">
                            <div>Next</div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFacts;