import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicDrawer from './components/BasicDrawer';
import Home from "./components/Home"
import Videos from "./components/Videos.jsx"
import FreeVideos from "./components/FreeVideos.jsx"
function App() {
  return (
    <>
      <Router>
        <BasicDrawer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/videos?category=free' element={<FreeVideos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
