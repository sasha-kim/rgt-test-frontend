import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useGetMenuListQuery} from "./services/menu";
import MenuContainer from "./components/MenuContainer";
import CartContainer from "./components/CartContainer";
import OrderMessage from "./components/OrderMessage";

function App() {
  return (
    <div className="App">
      <OrderMessage />
      <div className="grid grid-cols-12 border-2 space-x-0 h-[100vh]">
        <MenuContainer className="col-span-9 border-r-2 overflow-y-scroll"/>
        <CartContainer className="col-span-3 overflow-y-auto px-2" />
      </div>
    </div>
  );
}

export default App;
