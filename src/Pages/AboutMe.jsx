import React from 'react'
import "../Styles/App.css"

//I want to make it so that each component had an invivisual css styling sheet.


//This is the home page component. When you click on the home page nav bar button, this is what displays.

const AboutMe = () => {



  return (

    <div className="Home_Home">

      {/* <h1>Happy Wife, Happy Life!</h1>
<p>Welcome to my home page. Make yourself at home!</p> */}
      <div className="DivBox1">This is going to hold text</div>
      <div className="DivBox2">This is going to hold a shop icon</div>
      <div className="DivBox3">This is going to hold a website summary and welcome message</div>
    </div>
  )
}

export default AboutMe