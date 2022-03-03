import React from 'react';
import { Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';

const HomePageView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface TextProps {
  color?: string;
}

const HomePageText = styled.Text`
  color: #fff;
  font-size: 20px;
  ${(props: TextProps) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

const HomePage = () => {
  return (
    <HomePageView>
      <HomePageText color="#ff0">아주 잘되는 구만!</HomePageText>
      <HomePageText color="#f00">구우웃</HomePageText>
    </HomePageView>
  );
};

export default HomePage;
