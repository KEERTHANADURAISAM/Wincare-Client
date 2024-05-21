import React from 'react'
import "../styles/Service.css";
import { LuMenu } from 'react-icons/lu';
import { IconContext } from 'react-icons';
// import serviceImage1 from '../media/img/service-1.jpg'
const Service = () => {
  return (
    <div>
        <section className='service-grid'>
<div className='service-flex'>
    <button className='service-head-btn'>Our Services</button>
    <h1 className='service-h1-tag'>Awesome Financial Services For Business</h1>
</div>
<div className='service-sub-flex'>
<div className='icons-content'>
    <div>
<IconContext.Provider
          value={{ color: "#011A41", size: "30px", marginLeft: "40px" }}
        >
          <div className='icon-menu'>
          <LuMenu /><span>Financial Planning</span>
          </div>   
        </IconContext.Provider>
        
        </div>
        <div>
        <IconContext.Provider
          value={{ color: "#011A41", size: "30px", marginLeft: "40px" }}
        >
          <div className='icon-menu'>
          <LuMenu />   <span>Cash Investment</span>
          </div>   
        </IconContext.Provider>
     
        </div>
        <div>
        <IconContext.Provider
          value={{ color: "#011A41", size: "30px", marginLeft: "40px" }}
        >
          <div className='icon-menu'>
          <LuMenu /><span>Financial Consultancy</span>
          </div>   
        </IconContext.Provider>
        
        </div>
        <div>
        <IconContext.Provider
          value={{ color: "#011A41", size: "30px", marginLeft: "40px" }}
        >
          <div className='icon-menu'>
          <LuMenu /> <span>Business Loans</span>
          </div>   
        </IconContext.Provider>
       
        </div>
</div>
{/* <img src={serviceImage1} alt='service-Image1'/> */}
</div>



        </section>
    </div>
  )
} 

export default Service