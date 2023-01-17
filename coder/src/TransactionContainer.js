//import React from "react"
import React, { useEffect, useState } from "react";
import TransactionsItems from "./TransactionsItems";
import axios from "axios"
import SearchTransactions from "./SearchTransactions";
import AddTransactionForm from "./AddTransactions";
function TransactionContainer() {
  const[transactions, setTransaction]= useState([])
  useEffect(()=>{
   
    axios.get('http://localhost:8001/transactions')
    .then((res)=>{
      setTransaction(res.data)
      console.log(res);
    })
  },[])

  const deleteArrayItem = function(itemToBeRemoved){
    console.log(itemToBeRemoved)
    const tempTransactions = Object.assign([],transactions)
    const findIndex = tempTransactions.findIndex(a => a.id === itemToBeRemoved.id)

findIndex !== -1 && tempTransactions.splice(findIndex , 1)
console.log("kdJSLKJFKJ",tempTransactions.length)
setTransaction(tempTransactions)
}




  return (


<div>
  
  <header className="bankHeader">BANK OF FLATIRON</header>
  <SearchTransactions/>
 
<TransactionsItems allItemsArray={transactions} deleteArrayItem={deleteArrayItem}/>
<AddTransactionForm />
</div>

  );
  }
  export default TransactionContainer

