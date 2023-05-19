import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

import { Header } from '../Header'
import { LastActivity } from './LastActivity'

export function LastActivities() {
  return (
    <Animated.View
      entering={FadeIn.duration(500).delay(200)}
      exiting={FadeOut.duration(600)}
    >
      <Header 
        title='Last activities'
        buttonTitle='See all'
      />

      <LastActivity
        icon='water'
        title='3 events'
        subtitle='20 minutes ago'
        waterSpent='2.7 gal.'
      />

      <LastActivity
        icon='flask'
        title='5 events'
        subtitle='1 hour ago'
        waterSpent='3.6 gal.'
      />

      <LastActivity
        icon='water'
        title='6 events'
        subtitle='7 hours ago'
        waterSpent='6.9 gal.'
      />
    </Animated.View>
  )
}