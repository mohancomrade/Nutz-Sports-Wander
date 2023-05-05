import React from "react";
import "./Events.css";
import playstore from "../images/XMLID_1_.svg";
import vector from "../images/Group.svg";
import phone from "../images/19151872 1.svg";
import card1 from "../images/Group 917.svg";
import card2 from "../images/Frame (1).svg";
import card3 from "../images/Group 962.svg";
import card4 from "../images/Group 963.svg";
import vector1 from "../images/Vector.svg";
import book from "../images/Vector 15.svg";
import star from "../images/Vector (1).svg"

function Events() {
  return (
    <div className="events-header">
      <section class="banner">
        <div class="d-md-none sports-burger-menu">
          <a
            href="#!"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i class="icon icon-burger-white"></i>
          </a>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div className="col-lg-6 banner-content">
              <p className="mt-5">
                Enabling people to <span> book</span><img src={book} className="mt-5 book mr-5"/> <img src={star} className="star mt-3"/>
              </p>
              <div class="banner-heading">
                <h1>Sport Events, Venues</h1>
                <h1>
                  {" "}
                  <span>&amp; Explore</span>
                  Sports Ecosystem
                </h1>
              </div>


              <div class="banner-button-list">
                <ul class="list-inline d-flex justify-content-md-start justify-content-center">
                  <li class="list-inline-item">
                    <a href="https://play.google.com/store/apps">
                      <img
                        src={playstore}
                        class="banner-button playstore mt-5"
                      />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="" href="https://www.apple.com/in/store">
                      <img
                        src={vector}
                        class="banner-button playstore1 mt-5"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

 



            <div class="col-lg-6">
              <img src={phone} class="banner-img img-fluid phone" />
            </div>
          </div>
          <div class="row d-flex align-items-center">
            <div class="col-lg-4 col-12 order-lg-1 order-2">
              <div class="row">
                <div class="col-lg-6 col-6">
                  <div class="card text-center">
                    <i class="icon icon-stad"></i>
                    <img
                      class="card-img-top card1"
                      src={card1}
                      alt="Card image cap"
                    />
                    <h3 className="mt-3">798k+</h3>
                    <h4>venues</h4>
                  </div>
                </div>
                <div class="col-lg-6 col-6">
                  <div class="card text-center">
                    <i class="icon icon-smile"></i>
                    <img
                      class="card-img-top card2"
                      src={card2}
                      alt="Card image cap"
                    />
                    <h3 className="mt-3">798k+</h3>
                    <h4>users</h4>
                  </div>
                </div>
                <div class="col-lg-6 col-6">
                  <div class="card text-center">
                    <i class="icon icon-cork"></i>
                    <img
                      class="card-img-top card3"
                      src={card3}
                      alt="Card image cap"
                    />
                    <h3 className="mt-3">798k+</h3>
                    <h4>events</h4>
                  </div>
                </div>
                <div class="col-lg-6 col-6">
                  <div class="card text-center">
                    <i class="icon icon-play"></i>
                    <div class="card-text">
                      <img
                        class="card-img-top card4"
                        src={card4}
                        alt="Card image cap"
                      />
                      <h3 className="mt-3">200+</h3>
                      <h4>sports</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 order-lg-2 order-1">
              <div className="text-center insight">
                <div class="insight1 justify-center">
                  <i class="icon icon-arrow">
                    {" "}
                    <img src={vector1} className="vector mt-2 " />
                  </i>
                </div>
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
