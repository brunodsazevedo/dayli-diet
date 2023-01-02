import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { useState, useCallback, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';

import { Routes } from '@routes/index';
import { AuthProvider } from '@hooks/auth';

import theme from './src/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    function prepare() {
      if(fontsLoaded) {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View
        style={{ flex: 1 }}
        onLayout={onLayoutRootView}
      >
        <AuthProvider>
          <Routes />

          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
        </AuthProvider>
      </View>
    </ThemeProvider>
  );
}
