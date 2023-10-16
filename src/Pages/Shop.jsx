import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/App.css"


const Shop = () => {
  return (

    <div className="SHOP_PAGE">
    <div className="Shop_Shop">

      <div className="ShopBanner">
      <img src='/Images/SpecHeader.png' className='specHead' alt='' />
      </div>

      
      <Link to="/listing1">
        <div className="ShopItem1">
        <img src='/Images/Vial1.PNG' className='Logo' alt='' />
        <h1 className='head'>SUBJECT 4509</h1>
        </div>
      </Link>
       

      <div className="ShopItem2">
        <Link to="/listing2">
        <img src='/Images/Vial2.PNG' className='Logo' alt='' />
        <h1 className='head'>SUBJECT 9999</h1>
        </Link>
      </div>

      <div className="ShopItem3">
        <Link to="/listing3">
        <img src='/Images/Vial3.PNG' className='Logo' alt='' />
        <h1 className='head'>SUBJECT 6733</h1>
        </Link>
      </div>

      <div className="ShopItem4">
        <Link to="/listing4">
        <img src='/Images/Vial4.PNG' className='Logo' alt='' />
        <h1 className='head'>SUBJECT 9052</h1>
        </Link>
      </div>
    </div>
    </div>

  )
}

export default Shop