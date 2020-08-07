import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors.textInPrimary};
  background: ${(props) => props.theme.colors.primary};
`;

export const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;
  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;

    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;
  > img {
    height: 10rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    text-align: left;
    align-self: center;
    margin: 0;

    > h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    > img {
      height: 100%;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  > a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2rem Archivo;

    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${(props) => props.theme.colors.buttonText};
  }

  > a img {
    width: 4rem;
    margin-right: 2.4rem;
  }
  > a:first-child {
    margin-right: 1.6rem;
  }

  > a.study {
    background: ${(props) => props.theme.colors.primaryLighter};
  }

  > a.give-classes {
    background: ${(props) => props.theme.colors.secundary};
  }

  a.study:hover {
    background: ${(props) => props.theme.colors.primaryLight};
  }

  > a.give-classes:hover {
    background: ${(props) => props.theme.colors.secundaryDark};
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    > a {
      font-size: 2.4rem;
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;

    a {
      img {
        margin-right: 2.4rem;
      }
    }
  }
`;
