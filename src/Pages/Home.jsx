import React from 'react'
import "../Styles/App.css"
//I want to make it so that each component had an invivisual css styling sheet.


//This is the home page component. When you click on the home page nav bar button, this is what displays.

const Home = () => {



  return (
    <div className="HOME_PAGE">
    <div className="Home_Home">

      {/* <h1>Happy Wife, Happy Life!</h1>
<p>Welcome to my home page. Make yourself at home!</p> */}
      <div className="DivBox1"><h2>Go to the shop to checkout the newest monsters available for purchase!</h2></div>
      <div className="DivBox2">
      <img src='/Images/HazardButton2.PNG' className='hazardImg' alt='' />
      </div>
      <div className="DivBox3"><h1>Welcome to Post Human Prototype Relay, we are a mad science lab based in Atlanta, GA that specializes in making kaijus for your world domination!</h1></div>
    </div>
{/* <div className="App">
<h1>Image Gallery</h1>
<ImageGallery />
</div> */}
    </div>

  )
}

export default Home