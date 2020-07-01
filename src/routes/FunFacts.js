import React, { forwardRef, useImperativeHandle } from 'react';
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
        this.block1Title = React.createRef();
        this.block2Title = React.createRef();
        this.block3Title = React.createRef();
        this.block1Desc = React.createRef();
        this.block2Desc = React.createRef();
        this.block3Desc = React.createRef();
        this.popdiv = React.createRef();
        this.data = [
            {title: 'Title 1', desc: 'Description 1'},
            {title: 'Title 2', desc: 'Description 2'},
            {title: 'Title 3', desc: 'Description 3'},
            {title: 'Title 4', desc: 'Description 4'},
            {title: 'Title 5', desc: 'Description 5'},
            {title: 'Title 6', desc: 'Description 6'},
            {title: 'Title 7', desc: 'Description 7'},
            {title: 'Title 8', desc: 'Description 8'},
            {title: 'Title 9', desc: 'Description 9'},
            {title: 'Title 10', desc: 'Description 10'},
            {title: 'Title 11', desc: 'Description 11'},
            {title: 'Title 12', desc: 'Description 12'},
            {title: 'Title 13', desc: 'Description 13'},
            {title: 'Title 14', desc: 'Description 14'},
            {title: 'Title 15', desc: 'Description 15'}
        ];
        this.counter = 0;
    }

    componentDidMount() {
        this.fillDataoOnBlocks(this.counter);
        document.addEventListener("keydown", this.keyDownHandler);
    }

    rightBlockHandler = () => {
        if(this.counter + 1 >= this.data.length) return;
        ++this.counter;

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
            this.fillDataoOnBlocks(this.counter);
        }, 350);
        
    }

    leftBlockHandler = () => {
        if(this.counter - 1 < 0) return;
        --this.counter;

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
            this.fillDataoOnBlocks(this.counter);
        }, 350);
    }

    fillDataoOnBlocks(cnt) {
        if(cnt - 1 < 0 ) {
            this.leftBlockRef.current.classList.add('block-unvisible');
        } else {
            this.leftBlockRef.current.classList.remove('block-unvisible');
            this.block1Title.current.innerText = this.data[cnt - 1].title;
            this.block1Desc.current.innerText = this.data[cnt - 1].desc;
        }

        this.block2Title.current.innerText = this.data[cnt].title;
        this.block2Desc.current.innerText = this.data[cnt].desc;

        //console.log(cnt, this.data.length);
        if(cnt + 1 < this.data.length){
            this.rightBlockRef.current.classList.remove('block-unvisible');
            this.block3Title.current.innerText = this.data[cnt + 1].title;
            this.block3Desc.current.innerText = this.data[cnt + 1].desc;
        } else {
            this.rightBlockRef.current.classList.add('block-unvisible');
        }
    }

    keyDownHandler = (e) => {
        console.log('key press', e.which);
        if(e.which === 37) {
            this.leftBlockHandler();
        } else if (e.which ===39) {
            this.rightBlockHandler();
        }
    }

    openMoreDialogHandler = () => {
        this.popdiv.current.classList.add('visible-popup');
    }

    closePopupHandler = () => {
        this.popdiv.current.classList.remove('visible-popup');
    }


    render() {
        return (
            <>
            <div className="container">
                <div className="factLayout">
                    <div className="blocks">
                        {/* <div className="side-block">
                            <div>Prev</div>
                        </div> */}

                        <div className="parent-block" >
                            <div className="block main-block block-1" ref={this.leftBlockRef} onClick={this.leftBlockHandler}>
                                <div className="block-title">
                                <h4 ref={this.block1Title}>Title of 1</h4>

                                </div>
                                <div className="blocks-description">
                                    <span ref={this.block1Desc}>Description of 1</span>
                                </div>
                                <div className="block-footer">
                                    {/* <button className="more"> More </button> */}
                                </div>
                            </div>

                            <div className="block main-block block-2" ref={this.mainBlockRef}>
                                <div className="block-title">
                                <h4 ref={this.block2Title}>Title of 2</h4>

                                </div>
                                <div className="blocks-description">
                                    <span ref={this.block2Desc}>Description of 1</span>
                                </div>
                                <div className="block-footer" ref={this.footerRef}>
                                    <button className="more" onClick={this.openMoreDialogHandler}> More </button>
                                </div>
                            </div>

                            <div className="block main-block block-3" ref={this.rightBlockRef} onClick={this.rightBlockHandler}>
                                <div className="block-title">
                                    <h4 ref={this.block3Title}>Title of 3</h4>
                                </div>
                                <div className="blocks-description">
                                    <span ref={this.block3Desc}>Description of 1</span>
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

            <div class="popup" ref={this.popdiv}>
                <span className="close-popup" onClick={this.closePopupHandler}>X</span>
            </div>
            </>
        );
    }
}
 
export default FunFacts;