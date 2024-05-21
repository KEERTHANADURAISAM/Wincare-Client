import React from 'react'
import { IconContext } from 'react-icons'
import { IoLocation } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='footer-div'>
<div className='office-div'>
<IconContext.Provider
      value={{ color: 'blue', size: '40px',marginLeft:'40px',marginTop:"30px" }}
    >
      <div>
      <IoLocation />
      </div>
    </IconContext.Provider>
   
</div>
    </div>
  )
}

export default Footer