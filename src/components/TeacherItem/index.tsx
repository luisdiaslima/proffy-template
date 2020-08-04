import React from 'react';

import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://pbs.twimg.com/media/Eehv7YmXsAE0Ae3?format=jpg&name=small"
          alt="Luisinho"
        />
        <div>
          <strong>Luis</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Odeio física, mas desde que o mundo é mundo, eu tenho que ensinar essa
        parada
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
