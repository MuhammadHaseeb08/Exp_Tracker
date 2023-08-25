import { combineReducers, createStore } from "redux";
let init = [];

function Transactions(oldData = init, newData) {
  switch (true) {
    case newData.type == "addTrans":
      oldData.push(newData.data.transaction);
       
      break;
    case newData.type == "deleteTrans":
      oldData.splice(newData.data.index, 1); 
     
    case newData.type == "editTrans":
      oldData.forEach((trans) => {
        if (trans.id == newData.data.id) {
          trans.description = newData.data.nyaDesc;
          trans.amountT = newData.data.nyaAmount;
        }
      });
     

    default:
      break;
  }

  return [...oldData];
}



let compData = combineReducers({ Transactions });
let meraStore = createStore(compData);
export default meraStore;

// import { createSlice } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
// let transactionsSlice=createSlice({
//   name:"Transactions",
//   initialState:[],
//   reducers:{
//     addTrans(state,action){},
//     delTrans(state,action){}
//   }
// })
// // export {transactionsSlice}
// const meraStore=configureStore({
//   reducer:{
//     trans:transactionsSlice.reducer
//   }
// })
// export default meraStore