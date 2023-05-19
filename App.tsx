
import { StatusBar } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'

import { ContentContextProvider } from './src/contexts/ContentContext'

import { Loading } from './src/components/Loading'

import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <ContentContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </ContentContextProvider>
  );
}

