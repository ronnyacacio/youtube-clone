import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HEADER;

  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;
