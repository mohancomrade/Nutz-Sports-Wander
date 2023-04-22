import React from 'react';
import './Events.css';
import eventImage from '../images/image 3.png';
import vector from "../images/Vector 15.png"
import star from "../images/Vector.png"


function Events() {
  console.log(eventImage);

  return (
    <div className='events-header'>
        <div className='event-img'>
     <p>Enabling people to book</p>
   
     <img src={vector} className='vector'/>
     <img src={star} className='star'/>
    
     </div>
   
    </div>
  );
}

export default Events;


