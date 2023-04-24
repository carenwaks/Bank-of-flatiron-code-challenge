import './App.css';
import React,{ useEffect,useState} from 'react';
import Transactions from './components/Transactions';
import TransacForm from './components/TransacForm';
import TransacFilter from './components/TransacFilter';

function App() {
   const [transactions,setTransactions] = useState({})
   useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions))
    }, []); 
    console.log(transactions);

    function handleTransacUpdate (newTransac) {
      
      const postFormData ={
        method: "POST",
        header: {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(newTransac)
      }

      fetch("http://localhost:8001/transactions",postFormData)
      .then((r) => r.json())
      .then(newTransacPost => setTransactions(transaction => [...transaction,newTransacPost]))
      
    }
    

  return (
    <div className="App">
      <header className="App-header">   
      The Royal Bank of FlatIron  
      </header>
        <TransacFilter />
        <TransacForm onSubmitting={handleTransacUpdate}/> 
        <Transactions transactions={transactions} />                 
    </div>
  );
}

export default App;
