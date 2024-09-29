import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Installation from './pages/Installation';
import Test from './pages/Test';
import Success from './pages/Success';
import Failer from './pages/Failer';

const App: React.FC = () => {
  return (
    <div className="font-roboto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/installation' element={<Installation/>}/>
        <Route path='/test' element={<Test/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/fail' element={<Failer/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;