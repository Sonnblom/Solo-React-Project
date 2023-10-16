import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/App.css'



const Listing4 = () => {
  return (
    <div className="LISTING_PAGE">

      <div className="pageBox">
        <div className="imageBox">
          <img src='/Images/Vial4.PNG' className='shopImgVial4' alt='' />
        </div>
        <div className="infoBox">
          <h1>SUBJECT 9052</h1>
          <p>SPECIMEN LOG 9999: - Within the heart of a celestial relic, concealed within an asteroid of cosmic origin, our diligent excavation team unearthed an astonishing find - an extraterrestrial infant nestled in the asteroid's depths. Remarkably, this enigmatic being appears non-hostile, yet remains in a state of dormancy, seemingly impervious to conventional awakening methods. It establishes contact with our team through the transmission of cerebral waves, communicating in a manner that precludes the necessity of its retrieval to our terrestrial domain.</p>

        </div>
        <Link to="/shop">
          <div className="X">X</div>
        </Link>

        <div className="stripeButton">
          <Link to="https://www.buymeacoffee.com/anthonybadila">
          <img src='/Images/PurchaseButton.PNG' className='PurchaseButton' alt='' />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Listing4;