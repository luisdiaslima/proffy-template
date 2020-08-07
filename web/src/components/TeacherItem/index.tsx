import React from 'react';

import { createConnection } from 'net';
import { TeacherOfItem, Header, AboutContainer, Bio, Footer } from './styles';

import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createConnections() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }
  return (
    <TeacherOfItem>
      <Header>
        <img src={teacher.avatar} alt={teacher.name} />
        <AboutContainer>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </AboutContainer>
      </Header>

      <Bio>{teacher.bio}</Bio>
      <Footer>
        <p>
          Preço/hora
          <strong>
            R$
            {teacher.cost}
          </strong>
        </p>
        <a
          target="_blank"
          onClick={createConnections}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </Footer>
    </TeacherOfItem>
  );
};

export default TeacherItem;
