import React from 'react';

import { Header, Menu } from '../../components';
import { Wrapper } from './styles';

interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <Header toggleTheme={toggleTheme} />
      <Menu />
    </Wrapper>
  );
};

export default Home;