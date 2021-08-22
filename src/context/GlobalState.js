import React, {createContext, useReducer}  from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions : [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);

        const deleteTransaction = (id)=> {
            // console.log(id)
            dispatch({
                type: 'DELETE_TRANSACTION',  // arguments passed to dispatch is action 
                payload: id
            })
        } 

        const addTransaction = (newTransaction)=> {

            console.log(newTransaction);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: newTransaction
            })
        }
        return (
            <GlobalContext.Provider value={{ transactions : state.transactions, deleteTransaction , addTransaction}}>
                {children}
            </GlobalContext.Provider>
        )
}