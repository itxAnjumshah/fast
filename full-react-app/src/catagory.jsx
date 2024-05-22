import React from 'react'
export default function Catagory({finalcatagory,setcatname}) {
  let cat=finalcatagory.map((v,i)=>{
return(
<li onClick={()=>setcatname(v)} key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>{v}</li>
)
  })
  return (
    <div>
      <h3 className='font-bold font-500 text-[25px] p-[10px]'>Product  Category</h3>
      <ul>       
        {cat}       
      </ul>
    </div>
  )
}

