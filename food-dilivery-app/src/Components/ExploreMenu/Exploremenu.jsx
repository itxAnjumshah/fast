import React from 'react'
import './Exploremenu.css'
import{menu_list} from '../../Assets/frontend_assets/assets'

export default function Exploremenu({category,setCategory}) {
  return (
    <div className='explore-menu'  id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur praesentium quam iusto impedit amet vero soluta nihil sapiente dolores corporis id tempora suscipit, quibusdam laboriosam esse accusamus explicabo consectetur architecto.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}
