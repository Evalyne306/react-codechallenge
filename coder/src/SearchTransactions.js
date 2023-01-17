import React from "react";

function SearchTransactions() {
  return (
    <div className="searchInput">
      <input className="search"
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("Searching...")}
      />
      <button className="searchButton">SEARCH ITEM</button>
    </div>
  );
}
// filterArrayElementByEdit(array) {
//   return array.filter((element) => {
//     return element.isEdit === true;
//   })
// }
export default SearchTransactions;