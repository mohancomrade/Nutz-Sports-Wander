import React from "react";
import "./Stadium.css";
import sframe from "../images/Frame (3).svg";
import line from "../images/Vector 17.svg"

function Stadium() {
  return (
    <div className="stadium-header">
      <section class="for-stadium">
        <div class="stadium ">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex align-items-center justify-content-md-end">
                  <div class="stadium-white-bg d-flex align-items-center justify-content-center">
                    <img src={sframe} className="s-frame1 " />
                  </div>
                  <div class="pe-3 s-text">
                    <h2 className=" stadium-text">For Stadium owners</h2>
                    <span> About Venues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stdium-footer">
          <div class="row  s-row">
  <div class="col-4">
    <div class="text-center one">

      <i class="number-one w-50 p-3">01</i>  
      <div className="line">
      <img src={line} className=""/>
      </div>

       {/* <div class="col-lg-8 mx-auto">
            <div class="mb-4">
                <h6 class=" text-uppercase text-white"></h6>
            
                <hr class="white text-white"/>
            </div>
            </div>  */}
      <p class="text-center  custom  ">customise size</p>
    </div>   
  </div>
  <div class="col-2">
    <div class="text-center two">
      <i class="number-two w-50 p-3">02</i>
      <p class="text-center  manage">manage booking</p>
    </div>
  </div> <br/>
  <div class="col-3">
    <div class="text-center three">
      <i class="number-three w-50 p-3">03</i>
      <p class="text-center  app">individual application</p>
    </div>   
  </div>
  <div class="col-2">
    <div class="text-center four">
      <i class="number-four w-50 p-3">04</i>
      <p class="text-center  support">24*7 customer support</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>
    



    </div>
  );
}

export default Stadium;
