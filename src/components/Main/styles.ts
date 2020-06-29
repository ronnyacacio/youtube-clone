import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MAIN;
  background: ${({ theme }) => theme.colors.mainBackground};

  display: flex;
  flex-direction: column;

  padding: 38px 28px;
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
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
`;

export const GridVideo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 50px 12px;

  margin-top: 18px;

  @media screen and (max-width: 525px) {
    align-self: center;
  }
`;

export const ThumbVideo = styled.div``;

export const Thumb = styled.div`
  width: 250px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.iconsMenu};
`;

export const ThumbVideoHeader = styled.div`
  margin-top: 12px;
  display: flex;
`;

export const ImageChannel = styled.div`
  margin-right: 14px;
`;

export const ImageNotChannel = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.iconsMenu};
`;

export const ThumbVideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 25px;
`;

export const ThumbVideoInfoTitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  max-height: 50px;
  margin-bottom: 1px;
  color: ${({ theme }) => theme.colors.text};
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ThumbVideoInfoNameChannel = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.iconsMenu};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ThumbVideoInfoView = styled.span`
  font-size: 15px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.iconsMenu};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:after {
    content: '•';
    margin: 0 6px;
  }
`;

export const ThumbVideoInfoTime = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.iconsMenu};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
