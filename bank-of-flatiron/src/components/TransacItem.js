import React from "react";

function TransacItem({transaction}) {

  return (
    <table>
        <tr>
            <th>Date</th>
            <th>Description</th>                <th>Category</th>
            <th>Amount</th>
        </tr>
        <tr>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
        </tr>
    </table>
  );
}

export default TransacItem