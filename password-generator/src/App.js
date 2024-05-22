
import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./Data/passchar";

function App() {
 let  [uppercase, setuppercase]=useState(false)
 let [lowercase, setlowercase ]=useState(false)
 let  [number,setnumber]=useState(false)
 let [symbol, setsymbol]=useState(false)
let  [passwordlength,setpasswordlength]=useState(10)

let [fpass,setfpass]=useState('')
 let createPassword=()=>{
  let finalpassword=''
  let charset=''
  if(uppercase || lowercase ||number||symbol ){
    if(uppercase) charset+=UC;
    if(lowercase) charset+=LC;
    if(symbol) charset+=SC;
    if(number) charset+=NC;

for(let i=0;i<passwordlength;i++){
  finalpassword+=charset.charAt( Math.floor(Math.random()*charset.length) )
}


setfpass(finalpassword)

  }
  else{
    alert("please select  one  checkbox!-----")
  }


 }
 let copypass=()=>{
  navigator.clipboard.writeText(fpass)
 }


  return (
    <div className="PasswordBox">
      <h2>Pasword Generator</h2>
      <div className="passwordBoxin">
        <input type="text"value={fpass} readOnly />
        <button onClick={copypass}>copy</button>
      </div>
      <div className="passLength">
        <label>password Length</label>
        <input type="number" max={20} min={8} value={passwordlength} onChange={(event)=>setpasswordlength(event.target.value)} />
      </div>
      <div className="passLength">
        <label>including uppercase letter</label>
        <input type="checkbox" checked={uppercase} onChange={()=>setuppercase(!uppercase)} />
      </div>
      <div className="passLength">
        <label>including lowercase letter</label>
        <input type="checkbox" checked={lowercase} onChange={()=>setlowercase(!lowercase)} />
      </div>
      <div className="passLength">
        <label>including special symbols</label>
        <input type="checkbox" checked={symbol} onChange={()=>setsymbol(!symbol)} />
      </div>
      <div className="passLength">
        <label>including numbers</label>
        <input type="checkbox" checked={number} onChange={()=>setnumber(!number)} />
      </div>

    <button className="btn" onClick={createPassword}>Generate  Pasword</button>
    </div>
  );
}

export default App;
