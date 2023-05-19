import { useEffect } from 'react'
import { Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { useContent } from '../../../hooks/useContent'

import Animated, { 
  FadeInDown, 
  FadeOutDown, 
  interpolate, 
  useSharedValue,
  useAnimatedStyle,
  withTiming, 
} from 'react-native-reanimated'

import { styles } from './styles'

export function TriangleIndicator() {

  const { expanded, selectedEspecificTimeFilter } = useContent()

  const trianglePosition = useSharedValue(0)

  const windowWidth = Dimensions.get('window').width;

  const triangleAnimatedStyles = useAnimatedStyle(() => {
    return {
      left: interpolate(
        trianglePosition.value,
        [0, 1, 2],
        [windowWidth * 0.19, windowWidth * 0.45, windowWidth * 0.75]
      )
    }
  })

  useEffect(() => {
    trianglePosition.value = withTiming(selectedEspecificTimeFilter, { duration: 300 });
  }, [selectedEspecificTimeFilter])

  return (
    <>
      {expanded && (
        <Animated.View 
          entering={FadeInDown.delay(400)}
          exiting={FadeOutDown.duration(100)}
          style={[styles.triangleIcon, triangleAnimatedStyles]}
        >
          <Ionicons 
            name="triangle" 
            size={32} 
            color="#fff"
          />
        </Animated.View>
      )}
    </>
  )
}