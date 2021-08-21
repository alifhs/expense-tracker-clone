import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import { useContext } from 'react';

export const IncomeExpense = () => {

  const { transactions } = useContext(GlobalContext);
  let income = 0;
  let expense = 0;
  transactions.map((transaction)=> {
      if(transaction.amount > 0)
         income += transaction.amount;
      else 
        expense += transaction.amount;
  })

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${Math.abs( income).toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs( expense).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
