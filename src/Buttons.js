import React from 'react'

const Buttons = ({color, bgColor,bdcolor, show, showend, name}) => {
    return (
        <div>
          <div className="">
             <button style={{background:bgColor, color:color, border:`1px solid ${bdcolor}`}} > <i class="ri-shopping-cart-2-line" style={{display:show}}></i>{name} <i class="ri-shopping-cart-2-line" style={{display:showend}}></i></button>
           </div>  
        </div>
    )
}

export default Buttons
