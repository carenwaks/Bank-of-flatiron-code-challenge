import './App.css';
import React,{ useEffect,useState} from 'react';
import Transactions from './components/Transactions';
import TransacForm from './components/TransacForm';
import TransacFilter from './components/TransacFilter';

function App() {
   const [transactions,setTransactions] = useState([])
   const [search,setSearch] = useState("")   
   useEffect(() => {
    fetch("http://localhost:3001/transactions")
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions))
    }, []); 
    //  console.log(transactions);

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
      .then(newTransac => setTransactions(transaction => [...transaction,newTransac]))
      .catch(error => alert(error))      
    } 

    const filterTransactions=transactions.filter(transaction => search === ""? true: transaction.description.includes(search))
    function handleOnSearch (search) {
      setSearch(search)
    }

    
  return (
    <div className="App">
      <header className="App-header">   
      The Royal Bank of FlatIron  
      </header>
        <TransacFilter onSearching={handleOnSearch}/>
        <TransacForm onSubmitting={handleTransacUpdate}/> 
        <Transactions transactions={filterTransactions} />                 
    </div>
  );
}

export default App;
