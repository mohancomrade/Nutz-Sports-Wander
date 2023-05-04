import React from 'react';
import './Events.css';
// import eventImage from '../images/image 3.png';
// import vector from "../images/Vector 15.png"
// import star from "../images/Vector.png"


function Events() {
//   console.log(eventImage);

  return (
    <div className='events-header'>
     <section class="banner">
        <div class="d-md-none sports-burger-menu">
            <a href="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="icon icon-burger-white"></i></a>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 banner-content">
                    <h3>Enabling people to <span>book</span></h3>
                    <div class="banner-heading">
                        <h1>Sport Events, Venues</h1>
                        <h1> <span>&amp; Explore</span>
                            Sports Ecosystem</h1>
                    </div>
                    <div class="banner-button-list">
                        <ul class="list-inline d-flex justify-content-md-start justify-content-center">
                            <li class="list-inline-item">
                                <a class="" href="https://play.google.com/store/apps"> 
                                    <img src="./assets/images/banner-playstore.svg" class="banner-button"/>
                                </a>                                      
                            </li>
                            <li class="list-inline-item">
                                <a class="" href="https://www.apple.com/in/store"> 
                                    <img src="./assets/images/banner-appstore.svg" class="banner-button"/>
                                </a>                                     
                            </li>
                        </ul>
                    </div> 
                </div>
                <div class="col-lg-6">
                    <img src="./assets/images/banner-phone.png" class="banner-img img-fluid"/>
                </div>
            </div> 
            <div class="row d-flex align-items-center">
                <div class="col-lg-4 col-12 order-lg-1 order-2">
                    <div class="row">
                        <div class="col-lg-6 col-6"> 
                            <div class="card text-center">
                                <i class="icon icon-stad"></i>
                                <h3>798k+</h3>
                                <h4>venues</h4>
                            </div>
                        </div>
                        <div class="col-lg-6 col-6"> 
                            <div class="card text-center">
                                <i class="icon icon-smile"></i>
                                <h3>798k+</h3>
                                <h4>users</h4>
                            </div>
                        </div>
                        <div class="col-lg-6 col-6"> 
                            <div class="card text-center">
                                <i class="icon icon-cork"></i>
                                <h3>798k+</h3>
                                <h4>events</h4>
                            </div>
                        </div>
                        <div class="col-lg-6 col-6"> 
                            <div class="card text-center">
                                <i class="icon icon-play"></i> 
                                <div class="card-text">
                                    <h3>200+</h3>
                                    <h4>sports</h4>                             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 order-lg-2 order-1">
                    <div class="insight text-center">
                        <i class="icon icon-arrow"></i>
                        <h3>important insights</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>  
   
    </div>
  );
}

export default Events;


