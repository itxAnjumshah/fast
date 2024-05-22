import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import Fooddisplay from '../../Components/FoodDisplay/Fooddisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

export default function Home() {

const [category,setCategory] = useState("All")


  return (
    <div>
      <Header/>
<Exploremenu category={category} setCategory={setCategory}/>
<Fooddisplay  category={category} />
<AppDownload/>
    </div>
  )
}
