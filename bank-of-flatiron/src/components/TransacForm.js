import React, { useState } from "react";


function TransacForm ({onSubmitting}) {
    const [formData,setFormData] =useState({
        "date":"",
        "description":"",
        "category":"",
        "amount":0
    })
   

    function handleSubmit (event) {
        event.preventDefault();
        onSubmitting(formData);       
    }
    function handleChange (event) {        
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    return(
        
        <form className="new-transaction" onSubmit={handleSubmit} onChange={handleChange}>
            <label htmlFor="date">
                Date               
            </label>
            <input  type="date" id="date"onChange={handleChange} defaultValue={formData.date} />
            <input  type="description" placeholder="Description" onChange={handleChange} defaultValue={formData.description} />
            <input type="category" placeholder="Category" onChange={handleChange} defaultValue={formData.category}/>
            <input type="amount" placeholder="Amount" onChange={handleChange} defaultValue={formData.amount}/>
            <button> Add Transaction</button>
        </form>        
    )
}

export default TransacForm