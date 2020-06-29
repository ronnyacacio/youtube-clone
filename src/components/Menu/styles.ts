import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MENU;
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  flex-direction: column;
  padding: 10px 0;
  overflow-y: hidden;
  &:hover {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) =>
        theme.title === 'dark'
          ? 'rgba(255, 255, 255, 0.3)'
          : 'rgba(0, 0, 0, 0.2)'};
      height: 56px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
`;

export const List = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.iconsMenu};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.007px;
    padding: 5px 20px;
    text-transform: uppercase;
  }

  ul {
    li {
      display: block;
      width: 100%;
      color: ${({ theme }) => theme.colors.text};

      > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        width: 100%;
        min-height: 40px;
        padding: 0 20px;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${({ theme }) => theme.colors.text};

        div {
          width: 24px;
          height: 24px;
          margin-right: 20px;

          svg {
            width: 21px;
            height: 21px;
            color: ${({ theme }) => theme.colors.iconsMenu};
          }
        }

        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 15px;
        }
      }

      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) =>
          theme.title === 'dark' ? '#383838' : 'rgba(0, 0, 0, 0.05)'};
      }

      &.active {
        background: ${({ theme }) =>
          theme.title === 'dark' ? '#383838' : 'rgba(0, 0, 0, 0.1)'};

        > div {
          font-weight: 500;

          svg {
            color: ${({ theme }) => (theme.title === 'dark' ? 'white' : 'red')};
          }
        }
      }
    }
  }
  & + & {
    border-top: 1px solid
      ${({ theme }) =>
        theme.title === 'dark'
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)'};
    margin-top: 10px;
    padding-top: 10px;
  }
`;

export const AvatarChannel = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.iconsMenu};
  margin-right: 25px;
`;

export const Footer = styled.footer`
  border-top: 1px solid
    ${({ theme }) =>
      theme.title === 'dark'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)'};
  margin-top: 14px;
  padding-top: 14px;

  div {
    padding: 14px 25px 0;

    > span {
      display: inline-block;
      text-decoration: none;
      white-space: nowrap;
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      color: ${({ theme }) => theme.colors.iconsMenu};
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;

export const Copyright = styled.div`
  padding: 16px 25px;

  p {
    color: ${({ theme }) =>
      theme.title === 'dark'
        ? 'rgba(255, 255, 255, 0.5)'
        : 'rgba(0, 0, 0, 0.5)'};
    font-size: 12px;
    line-height: 18px;
  }
`;
