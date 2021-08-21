import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction"

export const Transactionlist = () => {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          return (
            <Transaction key={transaction.id}  transaction={transaction}/>
          );
        })}
      </ul>
    </>
  );
};
