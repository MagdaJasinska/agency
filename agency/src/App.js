import React from 'react';
import Header from './components/header/header';
import Services from './components/body/services/services';
import About from './components/body/about/about';
import Footer from './components/footer/footer';
import Team from './components/body/team/team'
import Navigation from './components/navigation/navigation';
import Portfolio from './components/body/portfolio/portfolio';
import Hello from './components/body/hello/hello';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Hello />
      <Navigation />
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Footer />
    </div>
  );
}


export default App;
