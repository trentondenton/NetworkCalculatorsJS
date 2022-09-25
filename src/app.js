import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Ipv4 from './pages/IPv4';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipv4" element={<Ipv4 />} />
        </Routes>
        <Footer />
      </div >
    )
  }
}

