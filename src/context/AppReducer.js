// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    // console.log(state, action)
    switch(action.type) {
       
        case 'DELETE_TRANSACTION':
        //    console.log({
        //         transaction: state.transactions.filter(transaction=> transaction.id !== action.payload)
        //     })
            return {
               
                transactions: state.transactions.filter(transaction=> transaction.id !== action.payload)
            }
        default : 
            return state;
    }
}