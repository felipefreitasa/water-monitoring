import { Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

import { styles } from './styles'

export function HomeHeader() {
  return (
    <Animated.View 
      style={styles.header}
      entering={FadeIn.duration(800)}
      exiting={FadeOut}
    >
      <Feather 
        name="menu" 
        size={26} 
        color="#fbfafc"
      />
     
      <Image
        source={{ uri: 'https://github.com/felipefreitasa.png' }}
        style={styles.image}
      />
    </Animated.View>
  )
}