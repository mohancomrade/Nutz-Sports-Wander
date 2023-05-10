import React from 'react';
import "./Footer.css";
import footerimage from "../images/SW 2.svg";
import footerplay from "../images/Group 297.svg";
import footerapple from "../images/Group 298.svg";
import footerlink from "../images/linkedin.svg";
import twitter from  "../images/Group (1).svg";
import insta from "../images/g176.svg";
import facebook from "../images/_x30_1._Facebook.svg";



function Footer() {
  return (
    <div className='header-footer'>
    
  
    <section class="footer">
    
        <div class="container-fluid">
            <div class="row">
                  <div class="col-lg-4 col-12 ">
                     <div class="copyright-content"> 
                        <div class="">
                            <a>
                                <img src={footerimage} class="footer-logo"/>
                            </a>  
                            <span><p className='copyright text-muted'>Copyright@2023</p></span> 
                            <div class="footer-images">
                                <div class="row">                          
                                    <div class="col-lg-6 col-6">
                                        <p className='install'>Install Now</p>
                                        <div class="d-flex gap-3 align-items-center justify-content-start">
                                          <img src={footerplay} className='f-play'/>
                                          <img src={footerapple} className='f-apple'/>                               
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6 footer-images-head">
                                        <p className='follow'>Follow Us On</p>
                                        <div class="d-flex gap-3 align-items-center justify-content-start ">
                                           <img src={facebook} className='facebook'/>
                                           <img src={insta} className='insta'/>
                                           <img src={twitter} className='twitter'/>
                                           <img src={footerlink} className='linkedin'/>
                                           <div className='vr'></div>
                                        </div>
                                        
                                    </div>      
                                                    
                                </div>     
                            </div>
                        </div>
                        
                    </div>
                    
                </div>     
           
              
                <div class="col-lg-8 col-12 footer-content">
                    <div class="row">
                        <div class="col-lg-3 col-6">
                            <h4>Our Products</h4>
                            <ul>
                                <li class="commerz">
                                    <a  href="">Nut Commerz</a>
                                </li>
                                <li>
                                    <a class="" href="">Meshkit</a>
                                </li>
                                <li>
                                    <a class="" href="">C-Lk.In</a>
                                </li>
                            </ul>
                        </div> 
                        <div class="col-lg-3 col-6">
                            <h4>Company</h4>
                            <ul>
                                <li>
                                    <a class="" href="">About</a>
                                </li>
                                <li>
                                    <a class="" href="">Faq</a>
                                </li>
                                <li>
                                    <a class="" href="">Contact-Support</a>
                                </li>
                            </ul>
                        </div> 
                        <div class="col-lg-3 col-6">
                            <h4>Learn More</h4>
                            <ul>
                                <li>
                                    <a class="" href="">Pricing</a>
                                </li>
                                <li>
                                    <a class="" href="">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a class="" href="">Developer API</a>
                                </li>
                            </ul>
                        </div> 
                        <div class="col-lg-3 col-6">
                            <h4>Policies</h4>
                            <ul>
                                <li>
                                    <a class="" href="">Delivery Poloicy</a>
                                </li>
                                <li>
                                    <a class="" href="">Cancellation Policy</a>
                                </li>
                                <li>
                                    <a class="" href="">Privacy Policy</a>
                                </li>
                            </ul>
                        </div> 
                    </div>                         
                </div>                           
            </div>
        </div>
    
    </section>
</div>
  )
}

export default Footer;
