import React from 'react'
import './Cards.css'
function Cards(props) {
    return (
      <section>


      <div className="card">
        <img src={props.image} alt={props.alt} />
        <div className="card-content">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      </section>
       
    );
  }

export default Cards