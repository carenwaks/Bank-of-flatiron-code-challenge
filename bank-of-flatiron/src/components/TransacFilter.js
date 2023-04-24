import React, {useState} from "react";

function TransacFilter({onSearching}) {
  const [search,setSearch]=useState("")
  function handledescriptionSearch (event) {
    setSearch(event.target.value)
    onSearching(search)
  }

  return (
    <div className="descriptions">
        <form>
         <input  value={search} type="text" placeholder="Search recent transactions" />
        <button onClick={handledescriptionSearch}>search</button>
        </form>
    </div>
  );
}

export default TransacFilter;

