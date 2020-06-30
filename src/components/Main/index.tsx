import React from 'react';

import thumbnail from '../../assets/thumbnail.jpg';
import {
  Container,
  Title,
  GridVideo,
  ThumbVideo,
  Thumb,
  ThumbVideoHeader,
  ImageChannel,
  ImageNotChannel,
  ThumbVideoInfo,
  ThumbVideoInfoTitle,
  ThumbVideoInfoNameChannel,
  ThumbVideoInfoView,
  ThumbVideoInfoTime,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Title>Recomendados</Title>

      <GridVideo>
        {Array.from(Array(15).keys()).map(item => (
          <ThumbVideo key={item}>
            <Thumb src={thumbnail} alt="Video" />

            <ThumbVideoHeader>
              <ImageChannel>
                <ImageNotChannel />
              </ImageChannel>
              <ThumbVideoInfo>
                <ThumbVideoInfoTitle>
                  Tema light/dark com React, Styled Components e TypeScript | Code/Drops #16
                </ThumbVideoInfoTitle>

                <ThumbVideoInfoNameChannel>
                  Rocketseat
                </ThumbVideoInfoNameChannel>

                <ThumbVideoInfoView>41.883 visualizações</ThumbVideoInfoView>

                <ThumbVideoInfoTime>31 de jan. de 2020</ThumbVideoInfoTime>
              </ThumbVideoInfo>
            </ThumbVideoHeader>
          </ThumbVideo>
        ))}
      </GridVideo>
    </Container>
  );
};

export default Main;
