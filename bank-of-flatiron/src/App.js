import './App.css';
import React,{ useEffect,useState} from 'react';
import Transactions from './components/Transactions';
import TransacForm from './components/TransacForm';
import CategoryFilter from './components/CategoryFilter';

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">   
      Bank of FlatIron  
      </header>
      <CategoryFilter />
      <TransacForm />
      <Transactions />
    </div>
  );
}

export default App;
