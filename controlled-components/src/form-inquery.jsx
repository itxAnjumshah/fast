import React, { useState } from 'react'
import './App.css';
export default function FormInquery() {
    let [formdata,setformdata]=useState(
            {
             uname:'',
             uemail:'',
             upassword:'',
             unumber:'',
             utextarea:'',
             index:'',
        
            }
        )

let [userdata, setuserdata]=useState([])



        let getvalue=(event)=>{
let olddata={...formdata}
let inputname=event.target.name;
let inputvalue=event.target.value;
olddata[inputname]=inputvalue;
setformdata(olddata)

        }


    let handlesubmit=(event)=>{

        let currentuserformdata={
             uname:formdata.uname,
             uemail :formdata.uemail,
             upassword:formdata.upassword,
             unumber:formdata.unumber,
             utextarea:formdata.utextarea,
        }
        let olduserdata=[...userdata,currentuserformdata]
        setformdata(olduserdata)

        event.preventDefault();

    }    
  return (
    <div className='enquery'>
        {userdata.length}
      <form  onSubmit={handlesubmit}>
        <label>name</label><br/>
        <input type="text" onChange={getvalue} value={formdata.uname}  name='uname' placeholder='enter your Name'/><br/>
        <label>Email</label><br/>
        <input type="text" name='uemail' onChange={getvalue} value={formdata.uemail}  placeholder='enter your Email'/><br/>
        <label>password</label><br/>
        <input type='password'  name='upassword' onChange={getvalue} value={formdata.upassword} placeholder='enter your Password  '/><br/>
        <label >Phone</label><br/>
        <input type="number" name='unumber' onChange={getvalue} value={formdata.unumber} placeholder='enter your phone  number' /><br/>
        <label >Message</label><br/>
        <textarea name='utextarea' onChange={getvalue} value={formdata.utextarea} placeholder='enter  your  message'  ></textarea><br/>
        <button>
            {
            formdata.index!==''? 'update': 'save'
            }
    
        </button>
      </form>
    </div>
  )
}
