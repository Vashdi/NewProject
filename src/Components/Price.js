import React from "react";
import './Price.css'
import 'aos/dist/aos.css';
const Price = () => {

    return (<section id="price">
        <h1 data-aos="zoom-out-up" className="priceTitle">מחירון&nbsp;מספרה</h1>
        <div className="pricesContainer">
            <div data-aos="fade-right" className="pricePicture">
                <img src={'images/pricepic.jpg'} alt="" />
            </div>
            <div data-aos="fade-right" className="pricesBoard">
                <h1 style={{ color: 'white' }}>המחירים שלנו</h1>
                <ul>
                    <li>תספורת גבר........................................................................₪50</li>
                    <li>₪תספורת + זקן......................................................................60</li>
                    <li>תספורת ילד..........................................................................₪30</li>
                    <li>₪שעוות פנים...........................................................................15</li>
                    <li>תספורת + שעוות פנים.....................................................₪70</li>
                    <li>מסיכת פנים..........................................................................₪25</li>
                    <li>גוונים + צבע(משתנה לפי סוג שיער)...........................₪120</li>
                </ul>
            </div>
        </div>
        {/* <div className="priceContainer">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" className="pricingCard">
                <div data-aos="zoom-out-up" class="pricing-plan">
                    <div class="pricing-header">
                        <div class="pricing-cost">גבר</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................₪50</li>
                        <li>₪תספורת וזקן................................................60</li>
                        <li>₪צבע..............................................................100</li>
                        <li>₪סידור זקן.......................................................20</li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" className="pricingCard">
                <div data-aos="zoom-out-up" class="pricing-plan">
                    <div class="pricing-header red">
                        <div class="pricing-cost">ילד</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................₪50</li>
                        <li>₪תספורת וזקן................................................60</li>
                        <li>₪צבע..............................................................100</li>
                        <li>₪סידור זקן.......................................................20</li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12" className="pricingCard">
                <div data-aos="zoom-out-up" class="pricing-plan">
                    <div class="pricing-header secondary">
                        <div class="pricing-cost">צבע</div>
                    </div>
                    <ul class="pricing-features">
                        <li>תספורת........................................................₪50</li>
                        <li>₪תספורת וזקן................................................60</li>
                        <li>₪צבע..............................................................100</li>
                        <li>₪סידור זקן.......................................................20</li>
                    </ul>
                </div>
            </div>
        </div> */}
    </section >)
}

export default Price;