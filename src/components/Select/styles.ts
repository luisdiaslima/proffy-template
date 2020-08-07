import styled from 'styled-components';

export const SelectBlock = styled.div`
  position: relative;

  .select-block + .select-block {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  select {
    color: ${(props) => props.theme.colors.textBase};
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.lineInWhite};
    outline: 0;
    padding: 0 1.6rem;
    text-decoration-color: ${(props) => props.theme.colors.textComplement};
    font: 1.6rem Archivo;
  }

  :focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${(props) => props.theme.colors.primaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
