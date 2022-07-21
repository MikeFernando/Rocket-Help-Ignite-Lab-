import { useFonts } from "expo-font";
import { NativeBaseProvider, StatusBar } from "native-base";
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";

import { THEME } from './src/styles/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
      <NativeBaseProvider theme={THEME}>
        { fontsLoaded ? <Routes /> : <Loading />}
      </NativeBaseProvider>
    </>
  );
}
