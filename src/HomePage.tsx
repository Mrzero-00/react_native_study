import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const HomePageView = styled.View``;

const HomePageText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const HomePage = () => {
  return (
    <HomePageView>
      <HomePageText>아주 잘되는 구만!</HomePageText>
    </HomePageView>
  );
};

export default HomePage;
