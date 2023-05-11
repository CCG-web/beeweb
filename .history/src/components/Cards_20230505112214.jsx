import React from 'react'
import './Cards.css'
function Cards(props) {
    return (
  


   <div className="card">
        <img src={props.image} alt={props.alt} />
        <div className="card-content">
          <h3>{props.title}</h3>
          <p className='description'>{props.description}</p>
        </div>
      </div>
   
 
   


       
    );
  }

export default Cards