import { View, Text } from 'react-native'
import { Feather } from "@expo/vector-icons"
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

import { styles } from './styles'

export function ChipCard() {
  return (
    <Animated.View 
      style={styles.container}
      entering={FadeIn.duration(800).delay(300)} 
      exiting={FadeOut} 
    >
      <Feather 
        name="arrow-down-circle" 
        size={18} 
        color="#67bd7c"
      />

      <View style={styles.content}>
        <Text style={[styles.text, styles.highlight]}>
          38 gal. {''}
        </Text>

        <Text style={styles.text}>
          below the daily average
        </Text>
      </View>
    </Animated.View>
  )
}