import React ,{useState} from "react";

function AddTransactionForm(newData) {
const[formData, setFormData] = useState([])
useState({
  date:"",
  description:"",
  category:"",
  amount:""

})

function handleSubmit(e){
  e.preventDefault();

fetch('https://api.npoint.io/3eab53ad988971bb28d9/transactions/0',{
  method: "POST",
  headers: {
"Content-Type":"application/json"
  },
  body: JSON.stringify(formData)
})
.then(res => res.json())
.then(data => newData(data))
}
function handleChange(e){
  e.preventDefault();
  const key = e.target.name
  const value = e.target.value;
  setFormData({...formData,[key]:value})
  console.log(formData)
}
  return (
    <div className="addTransactionClass">
      <form onSubmit={handleSubmit}className="uiform">
        <div className="adding">
          <input className="addInput" onChange={handleChange}type="date" name="date" />
          <input className="addInput" onChange={handleChange} type="text" name="description" placeholder="Description" />
          <input className="addInput" onChange={handleChange} type="text" name="category" placeholder="Category" />
          <input className="addInput" onChange={handleChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="addbtn" onSubmit={handleSubmit}  type="submit">
          ADD ITEM
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;