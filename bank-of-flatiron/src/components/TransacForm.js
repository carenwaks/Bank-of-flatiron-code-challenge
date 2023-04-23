import React, { useState } from "react";

function TransacForm () {
    const [formData,setFormData] =useState({
        "date":"",
        "description":"",
        "category":"",
        "amount":0
    })
   

    function handleSubmit (event) {
        event.preventDefault();
        onSubmit(formData)
    }
    function handleChange (event) {
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    return(
        <>
        <form className="new-transaction" onSubmit={handleSubmit} onChange={handleChange}>
            <label htmlFor="date">
                Date               
            </label>
            <input value={formData.date} type="date" id="date" />
            <input value={formData.description} type="text" placeholder="Description"/>
            <input value={formData.category} type="text" placeholder="Category"/>
            <input  value={formData.amount}type="number" placeholder="Amount"/>
        </form>
        <div>
            <button> Add Transaction</button>
        </div>
        </>
    )
}

export default TransacForm