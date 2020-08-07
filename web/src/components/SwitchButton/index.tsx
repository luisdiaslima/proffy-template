import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { PageOfHeader } from './styles';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface SwitchProps {
  toggleTheme(): void;
}

const SwitchButton: React.FC<SwitchProps> = (props) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <PageOfHeader>
      <Switch
        className="switch"
        onChange={props.toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.primaryLighter}
      />
    </PageOfHeader>
  );
};

export default SwitchButton;
