import { useContext } from "react";
import { useSelector,useDispatch } from "react-redux";
import "./history.css"


export default () => {
  let dispatch=useDispatch()
 let data= useSelector((store)=>{
    return store.Transactions
  })


  return (
    <div>
      <>
        <h3>History</h3>
        <ul id="list" className="list">
          {data.map((trans,index)=>{ return <li className={trans.amountT<0?"minus":"plus"}>{trans.description}<span>Rs.{trans.amountT}</span>
              
              <button className="delete-btn" onClick={()=>{
                               dispatch({
                                type:"deleteTrans",
                                data:{
                                  index
                                }

                                
                               }) 
           }}>x</button> <button id="edit" className={trans.amountT<0?"minus1":"plus1"} onClick={(evt)=>{
            let nyaDesc= prompt("enter new description")
            let nyaAmount= prompt("enter new Amount")
            let id=trans.id
            
            dispatch({
              type:"editTrans",
              data:{
                nyaDesc,
                nyaAmount,
                index,
                id

              }
            })
            

           }}>Edit</button></li>
            })
          }
          {/* <li className="minus">
            Cash <span>-$400</span>
            <button className="delete-btn">x</button>
          </li> */}
        </ul>
      </>
    </div>
  );
};
