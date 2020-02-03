import React from 'react';
import Header from './components/header/header';
import Services from './components/body/services/services';
import About from './components/body/about/about';
import Footer from './components/footer/footer';

import './App.css';
import Navigation from './components/navigation/navigation';
import Portfolio from './components/body/portfolio/portfolio';
import Hello from './components/navigation/hello';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Navigation/>  
      <Header/>
      <Services/>
      <Portfolio/>
      <About/>
      <Footer/>
    </div>
  );
}


export default App;
