import React from 'react';

const PopOver = ({ popRef, closePopupHandler }) => {

    return (
        <div className="popup" ref={popRef}>
            <div className="row border-bottom-1">
                <div className="col-lg-10">
                    <h2>
                        <i className="fa fa-info-circle"></i>
                        <span className="pad-left-10">Facts About Snakes That Will Rattle Your Mind</span></h2>
                </div>
                <div className="col-lg-2">
                    <i className="fa fa-times close-popup" onClick={closePopupHandler}></i>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-4">
                    <img className="fact-img" src={require("./../images/1.jpg")} />
                </div>
                <div className="col-lg-8">
                    <div className="row mar-bottom-10">
                        <div className="col-lg-1">
                            <span className="bullet-point">
                                <i class="fa fa-pinterest" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="col-lg-11 pad-left-0">
                            <label className="font-size-21 font-family-cur">They can sense a coming earthquake from 75 miles away (121 km), up to five days before it happens.</label>
                        </div>
                    </div>
                    <div className="row mar-bottom-10">
                        <div className="col-lg-1">
                            <span className="bullet-point">
                                <i class="fa fa-pinterest" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="col-lg-11 pad-left-0">
                            <label className="font-size-21 font-family-cur">Just because you cut off the head of a snake doesn’t mean the snake is done. That chopped-off head can still bite and unleash a huge amount of venom.</label>

                        </div>
                    </div>
                    <div className="row mar-bottom-10">
                        <div className="col-lg-1">
                            <span className="bullet-point">
                                <i class="fa fa-pinterest" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="col-lg-11 pad-left-0">
                            <label className="font-size-21 font-family-cur">Want to make sure you never see a snake? Move to Ireland, Iceland, New Zealand or one of the poles, North or South. No snakes live in those places.</label>

                        </div>
                    </div>
                    <div className="row mar-bottom-10">
                        <div className="col-lg-1">
                            <span className="bullet-point">
                                <i class="fa fa-pinterest" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="col-lg-11 pad-left-0">
                            <label className="font-size-21 font-family-cur">Big pythons and boa snakes have traces of back legs left over from millions of years of evolution when snakes started out as land lizards. As if we didn’t have enough to worry about.</label>

                        </div>
                    </div>
                    <div className="row mar-bottom-10">
                        <div className="col-lg-1">
                            <span className="bullet-point">
                                <i class="fa fa-pinterest" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="col-lg-11 pad-left-0">
                            <label className="font-size-21 font-family-cur">It can take a snake up to five days to digest its last meal. With bigger snakes like an anaconda, that digestion period is weeks rather than days, the same amount of time after an Italian Thanksgiving dinner. Trust me.</label>

                        </div>
                    </div>
                    <div className="row mar-bottom-10">
                        <div className="col-lg-1">
                            <span className="bullet-point">
                                <i class="fa fa-pinterest" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="col-lg-11 pad-left-0">
                            <label className="font-size-21 font-family-cur">The Mongoose is one of those rare animals that is immune to a snake’s venom. Go, Mongoose!</label>

                        </div>
                    </div>
                    <div className="row mar-bottom-10">
                        <div className="col-lg-1">
                            <span className="bullet-point">
                                <i class="fa fa-pinterest" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="col-lg-11 pad-left-0">
                            <label className="font-size-21 font-family-cur">Record holder for biggest variety of snake goes to the anaconda. It can top out at 595 pounds (270kg) and stretch out to 30 feet (9 meters). How big is that? An anaconda has been known to snack on full-grown jaguars… the cat, not the car.</label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopOver;