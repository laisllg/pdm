import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './contexts/routes/MainNavigator';
import { ContatoProvider } from './contexts/ContatoContext';

export default function App() {
  return (
    <ContatoProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ContatoProvider>
  );
}
