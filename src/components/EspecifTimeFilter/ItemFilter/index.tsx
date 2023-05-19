import { useEffect } from 'react'
import { Pressable, PressableProps } from 'react-native'
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { styles } from './styles'

type Props = PressableProps & {
  title: string;
  isSelected: boolean;
}

export function ItemFilter({ title, isSelected, ...rest }: Props) {

  const selected = useSharedValue(0)

  const textAnimatedStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        selected.value,
        [0, 1],
        ['#8f9cec', '#fbfafc']
      )
    }
  })

  useEffect(() => {
    if(isSelected){
      selected.value = withTiming(1, { duration: 300 })
    } else {
      selected.value = withTiming(0, { duration: 200 })
    }
  }, [isSelected])
  
  return (
    <Pressable 
      style={styles.button}
      {...rest}
    >
      <Animated.Text style={[styles.buttonTitle, textAnimatedStyles]}>
        {title}
      </Animated.Text>
    </Pressable>
  )
}