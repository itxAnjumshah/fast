import { useState } from 'react';
import './App.css';
import FormInquery from './form-inquery';
import Dform from './dform';
import Password from './password';

function App() {
  let [uname,setuname]= useState('')

let handleSubmit=(event)=>{
  event.preventDefault()
}
let getUname=(event)=>{
  setuname(event.target.value)}

let [password, setpassword]=useState('')




  return (
    <div>
      <div className='container'>
       <div className='row'>
        <div className='col-lg-6'>
            <form onSubmit={handleSubmit}>
              <div className='text-start my-3'>
                <label>Username</label><br/>
                <input type='text' onChange={getUname} className='form-control' value={uname}/>
              </div>
              <div className='text-start my-3'>
                <label>password</label><br/>
                <input type='text' onChange={(event)=>setpassword(event.target.value)} value={password} className='form-control'/>
              </div>
              <div>
                <button>save</button>
              </div>
            </form>
          </div>
        </div> 
      </div>
      <br/>
      <FormInquery/>
      <br/>
      <div style={{  paddingLeft:"20px",}}>
      <Dform/>
      </div>
      <div>
        <Password/>
      </div>
    </div>




  );
}

export default App;
