import React from "react";

function TransacFilter() {
  function handledescriptionSearch () {
    console.log("filter");     
  }

  return (
    <div className="descriptions">
        <form>
         <input  type="text" placeholder="Search recent transactions" />
        <button onClick={handledescriptionSearch}>search</button>
        </form>
    </div>
  );
}

export default TransacFilter;

