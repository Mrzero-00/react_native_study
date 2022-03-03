/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import HomePage from './src/HomePage';

const PageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #000;
`;

const App: () => Node = () => {
  return (
    <PageContainer>
      <HomePage />
    </PageContainer>
  );
};

export default App;
