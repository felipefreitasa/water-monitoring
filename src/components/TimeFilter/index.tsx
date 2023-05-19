import Animated, { 
  Easing, 
  FadeIn, 
  FadeOut, 
  withTiming,
  interpolate, 
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { Dimensions } from 'react-native'

import { ItemFilter } from './ItemFilter'

import { styles } from './styles'

export function TimeFilter() {

  const windowWidth = Dimensions.get('window').width;

  const filterPosition = useSharedValue(0)

  const filterAnimatedStyles = useAnimatedStyle(() => {
    return {
      left: interpolate(
        filterPosition.value,
        [0, 1, 2],
        [windowWidth * 0.02, windowWidth * 0.32, windowWidth * 0.61]
      )
    }
  })

  function handleSelectTimeFilter(value: number) {
    filterPosition.value = withTiming(value, { duration: 300, easing: Easing.ease  })
  }

  return (
    <Animated.View 
      style={styles.container}
      entering={FadeIn.duration(800)}
      exiting={FadeOut}
    >
      <Animated.View style={[styles.selectedItemContainer, filterAnimatedStyles]}/>

      <ItemFilter
        title='Week'
        onPress={() => handleSelectTimeFilter(0)}
      />

      <ItemFilter
        title='Month'
        onPress={() => handleSelectTimeFilter(1)}
      />

      <ItemFilter
        title='Year'
        onPress={() => handleSelectTimeFilter(2)}
      />
    </Animated.View>
  )
}