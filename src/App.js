import React from 'react';
import { Header, About, Gallary, Footer } from './components';

import './App.css';
import './index';
const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Gallary />
      <Footer />
    </div>
  );
};

export default App;
