import React from 'react';
import "./Devices.css";
import   anroid from "../images/Vector (3).svg";
import  apple from "../images/mdi_apple.svg";
import symbol from "../images/material-symbols_cloud.svg";

function Devices() {
  return (
    <div>


<section class="">
        <div class="device"> 
        <div className='devices-header'> 
            <div class="container">
                <h2 className='text-center available'>Available On All Your Devices</h2>
                <div class="d-flex align-items-center justify-content-evenly   text-center device-footer ">
                    <div className="anroid">
                        <img src={anroid} className='anroid-img'/>
                        <h4>Android</h4>
                    </div>
                    <div className="apple">
                        <img src={apple}/>
                        <h4>IOS</h4>
                    </div>
                    <div className='symbol-img1' >      
                       <img src={symbol} className='web-img'/>
                        <h4 className='web'>web</h4>
                    </div> 
                </div>
            </div>
        </div>   
        </div>
    </section>
      
    </div>
  )
}

export default Devices;
