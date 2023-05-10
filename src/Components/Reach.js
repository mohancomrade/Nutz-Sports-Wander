import React from 'react';
import "./Reach.css";
import message from "../images/Frame (4).svg";
import contact from "../images/Frame (5).svg";
import gmail from "../images/Frame (6).svg"

function Reach() {
  return (
    <div className='reachus-header'>

<div className='border-box'>

</div>
<section class="reachus">
        <div class="reach">
            <div class="container-fluid">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-5">
                        <div class="reach-text">
                            <div class="msg">
                                <img src={message}/>
                            
                        </div>
                        <h2>Reach Us</h2>
                        <h4>Via Mobile,Email</h4> 
                        <h4>Feel Free to Contact Us, We Are Happy To Help You For Sure.</h4>
                    </div>
                    </div>
                    <div class="col-lg-7 reach-footer">
                        <ul class="">
                            <li class="list-inline-item contact-img1">
                                <a href="" class="d-flex align-items-center contact-img">
                                  <i> <img src={contact}/></i> 
                                    <span>+91 96987 39898</span>
                                   
                                </a>
                                
                                <hr class="hr contact-hr" />
                            </li>
                            <li class="list-inline-item gmail-img">
                                <a href="" class="d-flex align-items-center">
                                    <img src={gmail} className='gmail-img1'/>
                                    <span>Admin@Sportswander.Com</span>
                                    
                                </a>
                                <hr class="hr gmail-hr " />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
        
    </div>
  )
}

export default Reach;
