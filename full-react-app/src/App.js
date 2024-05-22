import axios from 'axios';
import './App.css';
import Catagory from './catagory';
import { useEffect, useState } from 'react';
function App() {
  let [finalcatagory, setfinalcatagory] = useState([])
  let [catname, setcatname] = useState('')
  let Getcatagory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalresponse) => {
        setfinalcatagory(finalresponse)

      })
  }
  useEffect(() => {
    Getcatagory();
    getproduct();
  }, [])
  useEffect(() => {
    if (catname!== "") {
      axios.get(`https://dummyjson.com/products/category/${catname}`)
        .then((prorespo) => prorespo.data)
        .then((finalres) => {
          setfinalpro(finalres.products)
        })
    }
  }, [catname])

  let [finalpro, setfinalpro] = useState([])
  let getproduct = () => {
    axios.get('https://dummyjson.com/products')
      .then((prorespo) => prorespo.data)
      .then((finalres) => {
        setfinalpro(finalres.products)
      })
  }
  let pitems = finalpro.map((products, index) => {
    return (
      <ProductsItems key={index} pdata={products} />
    )
  })
  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1120px] mx-auto '>
          <h1 className='text-center text-[40px] font-bold mb-6'>our products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div >
              <Catagory finalcatagory={finalcatagory} setcatname={setcatname} />
            </div>
            <div>
              <div className='md:grid md:grid-cols-3 sm:grid sm:grid-cols-1 gap-5'>
                {
                  finalpro.length >= 1 ?
                    pitems
                    :
                    'no product found'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
function ProductsItems({ pdata }) {
  return (
    <div className='shadow-lg text-center pb-4'>
      <img src={pdata.thumbnail} className='w-[100%] h-[220px]' />
      <h4>{pdata.title}</h4>
      <b>{pdata.price}</b>
    </div>
  );
}
