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
        onSubmitting(formData)
        setFormData({
            "date":"",
            "description":"",
            "category":"",
            "amount":0 
        })
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
            <input  type="date" id="date" />
            <input value={formData.description} type="text" placeholder="Description" onChange={handleChange}/>
            <input value={formData.category} type="text" placeholder="Category" onChange={handleChange}/>
            <input  value={formData.amount}type="number" placeholder="Amount" onChange={handleChange}/>
        </form>
        <div>
            <button> Add Transaction</button>
        </div>
        </>
    )
}

export default TransacForm