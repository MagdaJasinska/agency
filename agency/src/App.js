import React from 'react';

import Hello from './components/body/hello/hello';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import Services from './components/body/services/services';
import Portfolio from './components/body/portfolio/portfolio';
import About from './components/body/about/about';
import Team from './components/body/team/team';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="app">
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
