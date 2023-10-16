import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/App.css'



const Listing3 = () => {
  return (
    <div className="LISTING_PAGE">

      <div className="pageBox">
        <div className="imageBox">
          <img src='/Images/Vial3.PNG' className='shopImgVial3' alt='' />
        </div>
        <div className="infoBox">
          <h1>SUBJECT 6733</h1>
          <p>SPECIMEN LOG 78900: - In a remarkable feat of genetic engineering, our team of scientists has successfully amalgamated the genetic traits of a bearded dragon, a crab, and a puppy, thus birthing the inaugural prototype of what promises to be the world's first dragon. Presently, this diminutive creature exhibits remarkable attributes, boasting an immunity to fire and shock damage, the capacity for subaquatic respiration, aerial prowess, and a formidable spiked tail engineered for combat. Its growth potential hints at a future where it may one day attain the towering stature of a skyscraper.</p>

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

export default Listing3;
