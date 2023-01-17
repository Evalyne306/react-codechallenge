
import React from "react"
import './App.css';
import Transaction from "./Transaction"



function TransactionsItems({allItemsArray, deleteArrayItem}) {

// const deleteArrayItem = function(itemToBeRemoved){
//     console.log(itemToBeRemoved)
//     const findIndex = allItemsArray.findIndex(a => a.id === itemToBeRemoved.id)

// findIndex !== -1 && allItemsArray.splice(findIndex , 1)
// }


    const eachTransaction = allItemsArray.map((transaction)=>(

    <Transaction
    key={transaction.id}
    date={transaction.date}
    description={transaction.description}
    category={transaction.category}
    amount={transaction.amount}
    deleteTransaction={()=>deleteArrayItem(transaction)}
    
    />    
    ))
  return (
    <div className="app.container">
    <table className="styled-table">
<thead>
    <tr>
    <th>
        <h2 className='tableHeaders'>Date</h2>
    </th>
    <th>
        <h2 className='tableHeaders'>Description</h2>
    </th>
    <th>
        <h2 className='tableHeaders'>Category</h2>
    </th>
    <th>
        <h2 className='tableHeaders'>Amount</h2>
    </th>
    <th>
        <h2 className='tableHeaders'>Delete</h2>
    </th>
    </tr> 
</thead>
{eachTransaction}
    </table>

    </div>

  );
}

export default TransactionsItems;
