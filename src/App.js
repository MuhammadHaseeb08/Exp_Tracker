import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import ComA from "./comA";
import Balance from "./Components/balance/balance";
import History from "./Components/History/history";
import Transactionform from "./Components/Transactionform/transactionform";
import { useState } from "react";
import { Provider } from "react-redux";
import meraStore from "./store/store";



function App() {
  

  return (
    <div>
      <Provider store={meraStore}>
      <Header />
     
      <Balance></Balance>
      <History></History>
        <Transactionform></Transactionform>
        </Provider>


      {/* < Data2.Provider value={"haseeb"}>

      <ComA></ComA>
        </Data2.Provider> */}
    </div>
  );
}

export default App;

