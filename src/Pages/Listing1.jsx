import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/App.css'



const Listing1 = () => {
  return (
    <div className="LISTING_PAGE">

      <div className="pageBox">
        <div className="imageBox">
          <img src='/Images/Vial1.PNG' className='shopImgVial1' alt='' />
        </div>
        <div className="infoBox">
          <h1>SUBJECT 4509</h1>
          <p>SPECIMEN LOG 392: - Subject 4509, a colossal grub-like larval entity, was discovered within a 5000-year-old sealed cave in the South African rainforest. The size of this larva, equivalent to that of a blue whale, posed a considerable challenge during its transportation, requiring specialized equipment like a forklift.

            Yet, a pressing inquiry persists: Where lies the mother or progenitor of these larvae within the rainforest's intricate ecological tapestry? This enigma underscores the significance of this unique discovery, which offers a rare opportunity to gain insights into biodiversity and the evolution of life in this secluded environment.</p>

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

export default Listing1;
