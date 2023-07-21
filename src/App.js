import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicDrawer from './components/BasicDrawer';
import Home from "./components/Home"
import Videos from "./components/Videos.jsx"
import FreeVideos from "./components/FreeVideos.jsx"
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Footer from './components/Footer';
import Upload from './components/Upload';
function App() {
  return (
    <>
      <Router>
        {/* BasicDrawer is the header  */}
        <BasicDrawer /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/videos?category=free' element={<FreeVideos />} />
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
