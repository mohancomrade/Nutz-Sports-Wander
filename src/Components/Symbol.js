import React from 'react'
import "./Symbol.css"
import poly from "../images/Polygon 5.svg"
import poly1 from "../images/Polygon 1.svg"   
import  poly3 from "../images/Polygon 5.svg" 

function Symbol() {
  return (
    <div className='symbol-header'>
        <div className='symbol'>
     <img src={poly} className= "float-right"/>
     </div><br></br>
    <div className='symbol1'>
     <img src={poly1} className='float-right1'/>
     </div><br></br>
     <div className='symbol2'>
     <img src={poly3} className='float-right2 '/>
     </div>
    </div>
  )
}

export default Symbol;
