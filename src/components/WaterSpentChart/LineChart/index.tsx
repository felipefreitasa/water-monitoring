import { useEffect } from 'react'
import { Text, View } from 'react-native'
import Animated, { 
  Easing,
  withDelay, 
  withTiming, 
  interpolate, 
  useSharedValue, 
  useAnimatedStyle, 
} from 'react-native-reanimated'

import { styles } from './styles'

type Props = {
  day: string;
  progress: number;
}

export function LineChart({ progress, day }: Props) {

  const chartProgress = useSharedValue(0)

  const progressAnimatedStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(
        chartProgress.value,
        [0, 1],
        [0, progress],
      )
    }
  })

  useEffect(() => {
    chartProgress.value = withDelay(700 , withTiming(1, { duration: 500, easing: Easing.ease }))
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        <Animated.View style={[styles.progress, progressAnimatedStyles]}/>
      </View>

      <Text style={styles.day}>
        {day}
      </Text>
    </View>
  )
}