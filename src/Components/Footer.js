import React from 'react';
import "./Footer.css";
import layer from "../images/Layer 1.png";
import group from "../images/Group 297.png";
import group1 from "../images/Group 298.png";
import facebook from "../images/_x30_1._Facebook.png";
import instagram from "../images/g176.png";
import twitter from "../images/Vector (1).png";
import linkedin from "../images/icon.png"

function Footer() {
  return (
    <div className='header-footer'>
      <section class="footers bg-light pt-5 pb-3">
   <div class="container pt-5">
       <div class="row">
           <div class="col-xs-12 col-sm-6 col-md-4 footers-one">
    		    <div class="footers-logo">
					<div className='footer-image'>
    		        <img src={layer} alt="Logo" style={{width:"340px"}}/>
					</div>
                    <p className='copy-right'>Copyright © 2023</p>
                    <diV className="install-head">
                    <p className='install'>Install now</p>
                    <img src={group} className='grp'/>
                    <img src={group1} className='grp1'/>
                    </diV>
                    <div className='follow-head'>
                        <p className='follow'> Follow us on</p>
                    <img src={facebook} className='face-book'/>
                    <img src={instagram} className='insta'/>
                    <img src={twitter} className='twitter'/>
                    <img src={linkedin} className='linkedin'/>
                    </div>
    		    </div>
    		    {/* <div class="footers-info mt-3">
    		        <p>Cras sociis natoque penatibus et magnis Lorem Ipsum tells about the compmany right now the best.</p>
    		    </div> */}
    		  
			<div className="vl"></div>
    		</div>

        
    	   <div class="col-xs-12 col-sm-6 col-md-2 footers-two">
          
    		    <h5><span>Our Products </span> </h5>
    		    <ul class="list-unstyled">
    			 <li><a href="maintenance.html">NutzCommerz</a></li>
    			 <li><a href="contact.html">Meshit</a></li>
    			 <li><a href="about.html">c-lk.in</a></li>
    			</ul>
    		</div>
    	   <div class="col-xs-12 col-sm-6 col-md-2 footers-three">
    		    <h5>Company </h5>
    		    <ul class="list-unstyled">
    			 <li><a href="maintenance.html">About</a></li>
    			 <li><a href="contact.html">FAQs</a></li>
    			 <li><a href="about.html">Contact Support</a></li>
    			</ul>
    		</div>
    	   <div class="col-xs-12 col-sm-6 col-md-2 footers-four">
    		    <h5>Learn more </h5>
    		    <ul class="list-unstyled">
    			 <li><a href="maintenance.html">Pricing</a></li>
    			 <li><a href="contact.html">Terms & Conditions</a></li>
    			 <li><a href="about.html">Developer API</a></li>
    			
    			</ul>
    		</div>
    	   <div class="col-xs-12 col-sm-6 col-md-2 footers-five">
    		    <h5>Policies </h5>
    		    <ul class="list-unstyled">
    			 <li><a href="maintenance.html">Delivery Policy</a></li>
    			 <li><a href="about.html">Cancellation Policy</a></li>
    			 <li><a href="about.html">Privacy Policy</a></li>
    			</ul>
                
    		</div>
            
       </div>
      
   </div>
   
</section>
</div>
  )
}

export default Footer;
