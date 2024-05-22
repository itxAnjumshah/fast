import { createContext, useEffect, useState } from "react";
import { food_list } from "../Assets/frontend_assets/assets";

export const StoreContext = createContext(null);




const StoreContextProveder = (props) => {
  const [cartitems,setcartitems]= useState({});

const addToCart =(itemid) => {
  if(!cartitems[itemid]){
    setcartitems((prev)=>({...prev,[itemid]:1}))
  }
  else{
    setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
  }
}
 const removeFromCart=(itemid)=>{
  setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1 }))
 }
useEffect(()=>{},[cartitems])

  const ContextValue = {
    food_list,
    cartitems,
    setcartitems,
    addToCart,
    removeFromCart
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProveder;
