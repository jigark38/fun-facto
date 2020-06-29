import React from 'react';
import './facts.scss';


class FunFacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
        this.rightBlockRef = React.createRef();
        this.leftBlockRef = React.createRef();
        this.mainBlockRef = React.createRef();
        this.footerRef = React.createRef();
    }

    rightBlockHandler = () => {
        const block1 = this.leftBlockRef.current;
        block1.classList.toggle("Block_1_0_transition");

        const block2 = this.mainBlockRef.current;
        block2.classList.toggle("Block_2_1_transition");

        const footerBlock = this.footerRef.current;
        footerBlock.classList.toggle("footerBlock-transition");

        const block3 = this.rightBlockRef.current;
        block3.classList.toggle("Block_3_2_transition");

        setTimeout(() => {
            block1.classList.toggle("Block_1_0_transition");

            block2.classList.toggle("Block_2_1_transition");

            block3.classList.toggle("Block_3_2_transition");

            footerBlock.classList.toggle("footerBlock-transition");

        }, 1500);
        
    }

    leftBlockHandler = () => {
        const block1 = this.leftBlockRef.current;
        block1.classList.toggle("Block_1_2_transition");

        const block2 = this.mainBlockRef.current;
        block2.classList.toggle("Block_2_3_transition");

        const footerBlock = this.footerRef.current;
        footerBlock.classList.toggle("footerBlock-transition");

        const block3 = this.rightBlockRef.current;
        block3.classList.toggle("Block_3_0_transition");


        setTimeout(() => {
            block1.classList.toggle("Block_1_2_transition");

            block2.classList.toggle("Block_2_3_transition");

            block3.classList.toggle("Block_3_0_transition");

            footerBlock.classList.toggle("footerBlock-transition");

        }, 2600);
    }


    render() {
        return (
            <div className="container">
                <div className="factLayout">
                    <div className="blocks">
                        {/* <div className="side-block">
                            <div>Prev</div>
                        </div> */}

                        <div className="parent-block" >
                            <div className="block main-block block-1" ref={this.leftBlockRef} onClick={this.leftBlockHandler}>
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

                            <div className="block main-block block-2" ref={this.mainBlockRef}>
                                <div className="block-title">
                                <h4>Title of 2</h4>

                                </div>
                                <div className="blocks-description">
                                    <span>Description of 1</span>
                                </div>
                                <div className="block-footer" ref={this.footerRef}>
                                    <button className="more"> More </button>
                                </div>
                            </div>

                            <div className="block main-block block-3" ref={this.rightBlockRef} onClick={this.rightBlockHandler}>
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