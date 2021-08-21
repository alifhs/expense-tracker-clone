import React from 'react'
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import { useContext } from 'react';

export const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    console.log(transactions)
    let balance = 0;
    transactions.map((transaction)=> {
        balance += transaction.amount;
    })
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance.toFixed(2)}</h1>
        </>
    )
}


export default Balance;