import React from "react";
import Header from "../common/Header";
import { blocks } from "../data/blogs";
import { Link } from "react-router-dom";



export default  function Blog() {
    let allblogs=blocks.map((v,i)=>{
        return(
            <div className="blog-items" key={i}>
               <h4> {v.title}</h4>
                <p>   
              {v.body}
                </p>
                <button> <Link to={'/blocks/${v.id}'}> read more</Link> </button>
            </div>
        )
    })
 return(
<div>
<Header/>
<h1>Blog pages</h1>
<div className="container">
{allblogs}


    
</div>

<img src="https://i.pinimg.com/236x/93/95/af/9395afa5b77ca2d605f70320eacd09f3.jpg" alt="" />


</div>


 )

}