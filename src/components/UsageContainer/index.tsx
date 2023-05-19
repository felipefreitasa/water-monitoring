import { useEffect } from 'react'
import { Platform, View, useWindowDimensions } from 'react-native'
import Animated, { 
  FadeOut, 
  withTiming,
  interpolate, 
  useSharedValue, 
  useAnimatedStyle, 
} from 'react-native-reanimated'

import { useContent } from '../../hooks/useContent'

import { FixtureCards } from './FixtureCards'
import { LastActivities } from './LastActivities'
import { WaterSpentChart } from '../WaterSpentChart'
import { TriangleIndicator } from './TriangleIndicator'

import { styles } from './styles'

export function UsageContainer() {

  const { expanded } = useContent()

  const { height } = useWindowDimensions()

  const cardDetails = useSharedValue(0)

  const modalInitialHeight = Platform.OS === 'ios' ? height * 0.50 : height * 0.49
  const modalFinalHeight = Platform.OS === 'ios' ? height * 0.73 : height * 0.68
  
  const modalAnimatedStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(
        cardDetails.value,
        [0,1],
        [modalInitialHeight, modalFinalHeight]
      )
    }
  })

  const modalContentAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        cardDetails.value,
        [0, 1],
        [1, 0]
      )
    }
  })

  useEffect(() => {
    if (!expanded) {
      cardDetails.value = withTiming(0, { duration: 600 })
    } else {
      cardDetails.value = withTiming(1, { duration: 600 })
    }
  }, [expanded])

  return (
    <>
      <TriangleIndicator/>

      <Animated.View style={[styles.container, modalAnimatedStyles]}>
        {expanded ? (
          <View style={styles.content}>
            <WaterSpentChart/>

            <LastActivities/>
          </View>
        ) : (
          <Animated.View
            exiting={FadeOut.duration(800)}
            style={modalContentAnimatedStyles}
          >
            <FixtureCards/>
          </Animated.View>
        )}
      </Animated.View>
    </>
  )
}