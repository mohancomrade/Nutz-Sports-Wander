import React from 'react';
import "./Footer.css";



function Footer() {
  return (
    <div className='header-footer'>
    
    {/* <!------7.footer-----> */}
    <section class="footer">
    <div class="footer-banner">
        <div class="container">
            <div class="row">
                  <div class="col-lg-4 col-12 ">
                     <div class="copyright-wrapper"> 
                        <div class="copyright">
                            <a class="" href="index.html">
                                <img src="./assets/images/logo.svg" class="footer-logo"/>
                            </a>  
                            <span><p>Copyright@2023</p></span> 
                            <div class="footer-icons">
                                <div class="row">                          
                                    <div class="col-lg-6 col-6">
                                        <p>install now</p>
                                        <div class="d-flex gap-3 align-items-center justify-content-start">
                                            <a class="" href=""><i class="icon icon-app"></i></a>
                                            <a class="" href=""><i class="icon icon-apple"></i></a>                                 
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <p>follow us on</p>
                                        <div class="d-flex gap-3 align-items-center justify-content-start ">
                                            <a class="" href=""><i class="icon icon-fb"></i></a>
                                            <a class="" href=""><i class="icon icon-ig"></i></a>
                                            <a class="" href=""><i class="icon icon-ln"></i></a>
                                            <a class="" href=""><i class="icon icon-tw"></i></a>
                                        </div>
                                    </div>                      
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>      
                <div class="col-lg-8 col-12">
                    <div class="row">
                        <div class="col-lg-3 col-6">
                            <h4>our products</h4>
                            <ul>
                                <li>
                                    <a class="" href="">nut commerz</a>
                                </li>
                                <li>
                                    <a class="" href="">meshkit</a>
                                </li>
                                <li>
                                    <a class="" href="">c-lk.in</a>
                                </li>
                            </ul>
                        </div> 
                        <div class="col-lg-3 col-6">
                            <h4>company</h4>
                            <ul>
                                <li>
                                    <a class="" href="">about</a>
                                </li>
                                <li>
                                    <a class="" href="">faq</a>
                                </li>
                                <li>
                                    <a class="" href="">contact-support</a>
                                </li>
                            </ul>
                        </div> 
                        <div class="col-lg-3 col-6">
                            <h4>learn more</h4>
                            <ul>
                                <li>
                                    <a class="" href="">pricing</a>
                                </li>
                                <li>
                                    <a class="" href="">terms &amp; conditions</a>
                                </li>
                                <li>
                                    <a class="" href="">developer API</a>
                                </li>
                            </ul>
                        </div> 
                        <div class="col-lg-3 col-6">
                            <h4>policies</h4>
                            <ul>
                                <li>
                                    <a class="" href="">delivery poloicy</a>
                                </li>
                                <li>
                                    <a class="" href="">cancellation policy</a>
                                </li>
                                <li>
                                    <a class="" href="">privacy policy</a>
                                </li>
                            </ul>
                        </div> 
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
