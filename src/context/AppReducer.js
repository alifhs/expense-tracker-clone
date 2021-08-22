// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    // console.log(state, action)
    // const newTransaction = {id : Math.floor(Math.random() * 10000000), amount : parseInt(action.payload.amount), text: action.payload.text};

    switch(action.type) {
       
        case 'DELETE_TRANSACTION':
        //    console.log({
        //         transaction: state.transactions.filter(transaction=> transaction.id !== action.payload)
        //     })
            return {
               
                transactions: state.transactions.filter(transaction=> transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            console.log({
                transactions : [...state.transactions, action.payload]
            });
            return {
                transactions : [...state.transactions, action.payload]
            }
        default : 
            return state;
    }
}