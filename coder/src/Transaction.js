import React from "react";

function Transaction({date,category,description,amount,deleteTransaction}){

return(
    
    <tr className="rowClass">
        <td className="tableData">{date}</td>
        <td className="tableData">{description}</td>
        <td className="tableData">{category}</td>
        <td className="tableData">{amount}</td>
        <td className="tableData">
            <button onClick={deleteTransaction}>DELETE ITEM</button>
        </td>

    </tr>

)
}
export default Transaction