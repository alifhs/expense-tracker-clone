import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const {deleteTransaction} = useContext(GlobalContext);

  return (
    <li className={sign === "+" ? "plus" : "minus"} key={transaction.id}>
      {transaction.text}{" "}
      <span>
        {sign}${sign === "+" ? transaction.amount : -1 * transaction.amount}
      </span>
      <button className="delete-btn" onClick={()=>{deleteTransaction(transaction.id)}}>x</button>
    </li>
  );
};
