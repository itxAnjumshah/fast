
// // import { useState } from 'react';

// // import Background from './Components/Background/Background';
// // import Password from './Components/Password/Password';

// // import Boxes from './Components/Boxes/Boxes';
// // import Card from './Components/Cards/Card';
// // import picture1 from '../src/Components/Assets/project-1.jpg'

// import UseCurrencyinfo from './Components/Currency-converter/UseCurrencyInfo'




// function App() {
//   // let mydata={
//   //   picture:"{picture1}",
//   //   text: "lorem ipsum 122",
//   //   txtbtn : "vissit me",

//   // }

// }

//   return (
//     <div className="App">
      
//        {/* <Card/>


//       <Boxes picture={picture1} text="lorem 1pfs" txtbtn="chweck me" />

// <Boxes txtbtn="THIS OS "/> */}



// {/* <Background/> */}


// {/* <Password/> */}


//     </div>
//   );
// }

// export default App;


/// now  for  cash converter
import { useState } from 'react';
import './App.css';
import Currency from './Components/Currency-converter/Curreny';
import useCurrencyInfo from './Components/Currency-converter/UseCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("pkr");
  const [from, setFrom] = useState("usd"); // Changed to "usd" for better default usage
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div className="App">
      <Currency
        label="From"
        amout={amount}
        onAmountChange={setAmount}
        onCurrencyChange={setFrom}
        currencyoption={options}
        selectCurrency={from}
      />
      <button className="swap" onClick={swap}>Swap</button>
      <Currency
        label="To"
        amout={convertedAmount}
        onAmountChange={setConvertedAmount}
        onCurrencyChange={setTo}
        currencyoption={options}
        selectCurrency={to}
        amoutDisable={true} // Disable amount input for the converted amount
      />
      <button className="btn-txt" onClick={convert}>Convert</button>
    </div>
  );
}

export default App;
