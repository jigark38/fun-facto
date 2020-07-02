import React from 'react';


const Block = ({ blockRef, titleRef, DescRef, footerRef, onClickBlock, blockClass, showMore, onClickMore }) => {

    let blockClasses = ["block", "main-block"];
    blockClasses.push(blockClass);
    let blockTitleClass = "block-title";
    let blockDescClass = "block-description";
    let blockFooterClass = "block-footer";
    let moreButtonClass = "more";

    const onClickHandler = () => {
        if(typeof onClickBlock !== 'undefined') {
            onClickBlock();
        }
    }

    let moreBlock = () => {
        console.log('showMore', showMore);
        return showMore ? (
            <div className={blockFooterClass} onClick={onClickMore} ref={footerRef}>
                <button className={moreButtonClass}> More </button>
            </div>
        ): "";
    }

    return (
        <div className={blockClasses.join(" ")} ref={blockRef} onClick={onClickHandler}>
            <div className={blockTitleClass}>
                <h4 ref={titleRef}>Title of 1</h4>

            </div>
            <div className={blockDescClass}>
                <span ref={DescRef}>Description of 1</span>
            </div>
            {moreBlock()}
        </div>
    );
}

export default Block;