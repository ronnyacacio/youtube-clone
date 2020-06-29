import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HEADER;

  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Navigation = styled.div`
  width: 100%;
  max-width: 185px;

  > img {
    width: 100px;
    height: 25px;
    margin-left: 20px;
  }
`;

export const Search = styled.div`
  display: flex;
  width: 100%;
  max-width: 728px;
  margin-left: 120px;

  form {
    display: flex;
  }

  form,
  input {
    width: 90%;
    height: 30px;
  }

  input {
    padding: 0.2rem 0.6rem;
    border: 1px solid
      ${({ theme }) =>
        theme.title === 'dark' ? theme.colors.boxSearch : '#ccc'};
    border-right: none;
    border-radius: 2px 0 0 2px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 400;
    line-height: 2.4rem;
    background: ${({ theme }) => theme.colors.mainBackground};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 30px;
    border: 1px solid
      ${({ theme }) => (theme.title === 'dark' ? '#333' : '#ccc')};
    background: ${({ theme }) => theme.colors.boxSearch};
    border-radius: 0 2px 2px 0;

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => (theme.title === 'dark' ? '#777' : '#111')};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 225px;
  height: 40px;
`;

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const Profile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
`;

export const ProfileNotImage = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.icons};
  border-radius: 50%;
`;
