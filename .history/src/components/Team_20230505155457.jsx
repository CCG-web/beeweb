import React from 'react'

import React from 'react';
import './Team.css';

function Team() {
  return (
    <div className="team-container">
      <div className="team">
        <div className="team-image-container">
          <img src="https://via.placeholder.com/80x80" alt="Imagem" className="team-round-image" />
        </div>
        <div className="team-text-container">
          <h2 className="team-title">Titulo 1</h2>
          <p className="team-description">Descrição 1</p>
        </div>
      </div>
      <div className="team">
        <div className="team-image-container">
          <img src="https://via.placeholder.com/80x80" alt="Imagem" className="team-round-image" />
        </div>
        <div className="team-text-container">
          <h2 className="team-title">Titulo 2</h2>
          <p className="team-description">Descrição 2</p>
        </div>
      </div>
      <div className="team">
        <div className="team-image-container">
          <img src="https://via.placeholder.com/80x80" alt="Imagem" className="team-round-image" />
        </div>
        <div className="team-text-container">
          <h2 className="team-title">Titulo 3</h2>
          <p className="team-description">Descrição 3</p>
        </div>
      </div>
      <div className="team">
        <div className="team-image-container">
          <img src="https://via.placeholder.com/80x80" alt="Imagem" className="team-round-image" />
        </div>
        <div className="team-text-container">
          <h2 className="team-title">Titulo 4</h2>
          <p className="team-description">Descrição 4</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
