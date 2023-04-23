import React, { useEffect} from "react";
import TransacItem from "./TransacItem";

function Transactions () {
    
  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    }, []);

    return (<>
        <TransacItem transaction={transaction}/>
        </>)
}

export default Transactions