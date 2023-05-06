import React from 'react';
import "./Organizers.css";
import vector20 from "../images/Vector (2).svg";
import poly03 from "../images/Polygon 5 (1).svg";
import poly4 from "../images/Polygon 5 (1).svg"; 
import  poly5 from "../images/Polygon 5 (1).svg";
import frame979 from "../images/Frame 979.svg";
import tickets from "../images/Frame 979 (1).svg";
import event from "../images/Frame 979 (2).svg";
import customer from "../images/Frame 979 (4).svg";


function Organizers() {
  return (
    <div className='organizers-header'>
<section classs="for-organizers">
        <div class="org">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex align-items-center gap-lg-5 gap-4 org-heading">
                        <div className="text-center vector-1">
                <div class="vector">
                  <i class="icon icon-arrow">
                    
                    <img src={vector20} className="vector mt-2 " />
                  </i>
                </div>
                
              </div>
                            <div className='mt-5 org-text'>
                     
                                <h2>For Organizers</h2>
                                <span> Five  Stages of Events</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="row">
                    <div class="col-lg-3 col-md-2 col-1"> </div>
                    <div class="col-lg-3 col-md-2 col-1"> </div>
                    <div class="col-lg-3 col-md-2 col-1"> </div>                       
                    <div class="col-lg-3 col-md-6 col-9">
                        <div class="card card-one ">
                            <div class="card-bubble d-flex align-items-center justify-content-center">
                                <i class="icon icon-support"> <img src={customer}/></i>
                            </div>
                            <div class="card-text">
                                <h3>04</h3>
                                <div class="">
                                    <h4>24*7 customer</h4>
                                    <h4> support</h4>
                                </div>                                       
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-2 col-1"> </div>
                    <div class="col-lg-3 col-md-2 col-1"> </div>
                    <div class="col-lg-3 col-md-6 col-9">
                        <div class="card card-two">
                            <div class="card-bubble d-flex align-items-center justify-content-center">
                                <i class="icon icon-event"><img src={event}/></i>
                            </div>
                            <div class="card-text">
                                <h3>03</h3>
                                <h4>event promortion</h4>
                            </div>
                        </div>
                    </div>
                   
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-2 col-1"></div>
                    <div class="col-lg-3 col-md-6 col-9">
                        <div class="card card-three">
                            <div class="card-bubble d-flex align-items-center justify-content-center">
                                <img src={tickets}/>
                            </div>
                            <div class="card-text">
                                <h3>02</h3>
                                <h4>manage tickets</h4>
                            </div>
                        </div>
                    </div>
                  
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-9">
                        <div class="card card-four">
                            <div class="card-bubble d-flex align-items-center justify-content-center">
                                <i class="icon icon-calendar"> <img src={frame979}/></i>
                            </div>
                            <div class="card-text">
                                <h3 className=''>01</h3>
                                <h4 className=''>create event</h4>
                            </div>
                        </div>
                    </div>
               
    <div className='symbol-1'>
     <img src={poly03} className= "poly-img1"/>
     </div><br></br>
    <div className='symbol-2'>
     <img src={poly4} className='poly-img2'/>
     </div><br></br>
     <div className='symbol-3'>
     <img src={poly5} className='poly-img3'/>
     </div>
                </div>
            </div>
        </div>


        
    </section>


    
      
    </div>
  )
}

export default Organizers;
