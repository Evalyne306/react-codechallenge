import React,{ useState} from "react";



function SearchTransactions({search}) {
const [searchItem, setSearchItem]= useState("")
function handleSearch(value){
  setSearchItem(value)
console.log(value)

}


  return (
    <div className="searchInput">
      <input  onChange={(e)=>{
        handleSearch(e.target.value)
        search(searchItem)
      }} className="search"
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchItem}
      />
     
     </div>
   );


// filterArrayElementByEdit(array) {
//   return array.filter((element) => {
//     return element.isEdit === true;
//   })
  }
export default SearchTransactions;