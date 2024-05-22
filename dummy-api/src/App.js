
import './App.css';
import ConstructorLife from './Components/ConstructorLifeCycle/ConstructorLife';
import Fetch from './Components/Fetchapi/Fetch';
import Formsubmit from './Components/Form-submit/Form-submit';
import Formvalidation from './Components/FormValidation/Formvalidation';
import HooksUsestate from './Components/HOOKS/HooksUsestate';
import Hookuseeffect from './Components/HOOKS/Hookuseeffect';
import Hideshow from './Components/Hide-show-button/Hide-show';
import PassFuntionProps from './Components/PassFuntionProps/PassFuntionProps';
import Input1 from './Components/inputboxes/Input1';

function App() {

function  getData() 
{
  alert("hello from app")
}


  return (
    <div >
      <Fetch/>
<Input1/>
<Hideshow/>
<br/>
<br/>
<Formsubmit/>
<Formvalidation/>
<br/>
<PassFuntionProps  data={getData}/>
<ConstructorLife/>

<HooksUsestate/>

<Hookuseeffect/>
    </div>
  );
}

export default App;
