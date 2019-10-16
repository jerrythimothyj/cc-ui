import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreditCard from './containers/credit-card/credit-card';

const App: React.FC = () => {
  return (
    <div className="App">
      <CreditCard />
    </div>
  );
}

export default App;
