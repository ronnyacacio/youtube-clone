import React from 'react';

import { Header } from '../../components';
import { Wrapper } from './styles';

interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <Header toggleTheme={toggleTheme} />
    </Wrapper>
  );
};

export default Home;