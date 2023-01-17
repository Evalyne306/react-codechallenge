//import React from "react"
import React, { useEffect, useState } from "react";
import TransactionsItems from "./App";
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
  console.log(transactions)
function search(searchValue){
let result=transactions.filter((transaction)=>{
return transaction.description.toLowerCase().includes(searchValue.toLowerCase())

})
setTransaction(result)
}
  const deleteArrayItem = function(itemToBeRemoved){
    console.log(itemToBeRemoved)
    const tempTransactions = Object.assign([],transactions)
    const findIndex = tempTransactions.findIndex(a => a.id === itemToBeRemoved.id)

findIndex !== -1 && tempTransactions.splice(findIndex , 1)
console.log("kdJSLKJFKJ",tempTransactions.length)
setTransaction(tempTransactions)
}



return (
  <div className="transactions-container">
    <header className="bankHeader">
      <p>BANK OF FLATIRON</p>
    </header>
    {(
      <>
   
       
        <SearchTransactions search={search} />

<TransactionsItems allItemsArray={transactions} deleteArrayItem={deleteArrayItem} search={search}/>
<AddTransactionForm />
      </>
    )}
  </div>
);
}   

 
  export default TransactionContainer

