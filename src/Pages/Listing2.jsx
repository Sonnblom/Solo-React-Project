import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/App.css'



const Listing2 = () => {
  return (
    <div className="LISTING_PAGE">

      <div className="pageBox">
        <div className="imageBox">
        <img src='/Images/Vial2.PNG' className='shopImgVial2' alt='' />
        </div>
        <div className="infoBox">
          <h1>SUBJECT 9999</h1>
          <p>SPECIMEN LOG 23002: - Our team of scientists embarked on an expedition to the enigmatic Bermuda Triangle, where they discovered the kraken, a creature once considered purely mythical. Subsequently, they successfully collected DNA samples from this newfound enigma and transported them to our state-of-the-art laboratory for the purpose of cloning. Designated as 'Subject 9999,' this organism exhibits a hybrid composition, fusing characteristics evocative of a giant squid, hammerhead shark, and octopus. It is anticipated that Subject 9999 will achieve a size three times that of the blue whale, thereby representing an extraordinary and enigmatic subject for extensive scientific inquiry.</p>
          
        </div>
          <Link to="/shop">
            <div className="X">X</div>
          </Link>

        <div  className="stripeButton">
        <Link to="https://www.buymeacoffee.com/anthonybadila">
        <img src='/Images/PurchaseButton.PNG' className='PurchaseButton' alt='' />
          </Link>
          </div>
      </div>

    </div>
  );
};

export default Listing2;
