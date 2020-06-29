import React from 'react';

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
            <Thumb />

            <ThumbVideoHeader>
              <ImageChannel>
                <ImageNotChannel />
              </ImageChannel>
              <ThumbVideoInfo>
                <ThumbVideoInfoTitle>
                  Autenticação JWT com Context API e React Router
                </ThumbVideoInfoTitle>

                <ThumbVideoInfoNameChannel>
                  Mateus Silva
                </ThumbVideoInfoNameChannel>

                <ThumbVideoInfoView>3.672 visualizações</ThumbVideoInfoView>

                <ThumbVideoInfoTime>4 de abr. de 2020</ThumbVideoInfoTime>
              </ThumbVideoInfo>
            </ThumbVideoHeader>
          </ThumbVideo>
        ))}
      </GridVideo>
    </Container>
  );
};

export default Main;
