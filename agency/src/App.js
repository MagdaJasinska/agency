import React from 'react';
import Header from './components/header/header';
import Services from './components/body/services/services';

import './App.css';
import Navigation from './components/navigation/navigation';
import Portfolio from './components/body/portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <Navigation/>  
      <Header/>
      <Services/>
      <Portfolio/>
    </div>
  );
}


export default App;
