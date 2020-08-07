import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections,
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyImg from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

function Landing() {
  const [totalConnections, setTotalConnectios] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;

      setTotalConnectios(total);
    });
  }, []);
  return (
    <PageLanding>
      <PageLandingContent className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyImg} alt="Estudar" />
            Estudar
          </Link>

          <Link to="give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Estudar
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de
{' '}
{totalConnections} conexões
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
}

export default Landing;
