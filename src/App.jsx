
import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import AboutMe from "./Pages/AboutMe"
import { Route, Routes } from "react-router-dom";
import Listing1 from "./Pages/Listing1"
import Listing2 from "./Pages/Listing2"
import Listing3 from "./Pages/Listing3"
import Listing4 from "./Pages/Listing4"



function App() {
    return <div className="APP_PAGE">
    <div className="App">
          <div className=''>
            <img src='/Images/newLogo.PNG' className='Logo' alt='' />
            </div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/shop" exact element={<Shop />}/>
            

            <Route path="/listing1" exact element={<Listing1 />}/>
            <Route path="/listing2" exact element={<Listing2 />}/>
            <Route path="/listing3" exact element={<Listing3 />}/>
            <Route path="/listing4" exact element={<Listing4 />}/>
          </Routes>
        
        </div>
        </div>

}

export default App;