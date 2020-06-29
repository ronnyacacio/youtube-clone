import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 80px auto;
  grid-template-rows: 55px auto;

  grid-template-areas:
    'HEADER HEADER'
    'MENU MAIN';

  height: 100vh;
`;
