import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

import { useContent } from '../../hooks/useContent'

import { styles } from './styles'

export function DetailsHeader() {

  const { setIsExpanded, detailsHeaderTitle } = useContent()

  return (
    <Animated.View 
      style={styles.header}
      entering={FadeIn.duration(800)}
      exiting={FadeOut}
    >
      <TouchableOpacity 
        onPress={() => setIsExpanded(false)}
        style={styles.icon}
      >
        <Feather 
          name="arrow-left" 
          size={26} 
          color="#fbfafc"
        />
      </TouchableOpacity>
     
      <Text style={styles.title}>
        {detailsHeaderTitle}
      </Text>
    </Animated.View>
  )
}