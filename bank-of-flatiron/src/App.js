import './App.css';
import React,{ useEffect,useState} from 'react';
import Transactions from './components/Transactions';
import TransacForm from './components/TransacForm';
import TransacFilter from './components/TransacFilter';

function App() {
   const [transactions,setTransactions] = useState([])
   useEffect(() => {
    fetch("http://localhost:3001/transactions")
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions))
    }, []); 
    console.log(transactions);

    function handleTransacUpdate (newTransac) {
      
      const postFormData ={
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(newTransac)
      }

      fetch("http://localhost:3001/transactions",postFormData)
      .then((r) => r.json())
      .then(newTransacPost => setTransactions(transaction => [...transaction,newTransacPost]))
      
    }

    function handleSearch (search) {
      setTransactions(transactions => transactions.filter(transaction => transaction.description === search.value))
    }
    

  return (
    <div className="App">
      <header className="App-header">   
      The Royal Bank of FlatIron  
      </header>
        <TransacFilter onSearching={handleSearch}/>
        <TransacForm onSubmitting={handleTransacUpdate}/> 
        <Transactions transactions={transactions} />                 
    </div>
  );
}

export default App;
