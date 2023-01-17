
import React from "react"
import './App.css';

import Transaction from "./Transaction"



function TransactionsItems({allItemsArray, deleteItems}) {
    const eachTransaction = allItemsArray.map((transaction)=>(
    <Transaction
    key={transaction.id}
    date={transaction.date}
    description={transaction.description}
    category={transaction.category}
    amount={transaction.amount}
    deleteTransaction={deleteItems}
    />    
    ))
  return (
    <div className="app.container">
    <table className='tableClass'>
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
    //   <div className="app.container">
    //       <div>
    //           <h1 style={{ color: 'green' }}>
    //               GeeksforGeeks
    //           </h1>
    //           <h3>Rendering Array of Objects</h3>
    //           <br></br>
    //           <Child />
    //       </div>
    //   </div>
  );
}

export default TransactionsItems;
