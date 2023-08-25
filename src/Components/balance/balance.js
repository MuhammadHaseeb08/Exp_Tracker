import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  // let bal= useSelector((store)=>{
  //   return store.Balance
    
  // })
  // console.log(bal);
  // console.log(bal);
  let income=0
  let expense=0
  let data = useSelector((store) => {
    return store.Transactions;
  });
  data.forEach(trnas => {
  if (trnas.amountT>0) {
    income+= +(trnas.amountT)
  }else{
    expense+= +(trnas.amountT)
  }
 });
 
 let cu=0
 let bal =false
 let  balance= income- -(expense)
  if (balance==0 ) {
    bal=true
  }
  
  
 

  return (
    <div>
      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">Rs{bal?cu:balance}</h1>
        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">
              {/* Rs.{data} */} Rs. {income}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">
            Rs. {expense}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
