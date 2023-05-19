import { View } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

import { LineChart } from './LineChart'
import { HeaderSubtitle } from './HeaderSubtitle'

import { styles } from './styles'

export function WaterSpentChart() {
  return (
    <Animated.View 
      style={styles.container}
      entering={FadeIn.duration(500).delay(200)}
      exiting={FadeOut.duration(600)}
    >
      <View style={styles.header}>
        <HeaderSubtitle
          title='Spent this week'
          subtitle='591.4 gal.'
        />

        <View style={styles.separator}/>

        <HeaderSubtitle
          title='Spent on Sat.'
          subtitle='24.6 gal.'
        />
      </View>

      <View style={styles.rowContainer}>
        <LineChart 
          progress={80}
          day='Mon'
        />

        <LineChart 
          progress={40}
          day='Tue'
        />

        <LineChart 
          progress={55}
          day='Wed'
        />

        <LineChart 
          progress={100}
          day='Thu'
        />

        <LineChart 
          progress={40}
          day='Fri'
        />

        <LineChart 
          progress={120}
          day='Sat'
        />

        <LineChart 
          progress={20}
          day='Sun'
        />
      </View>
    </Animated.View>
  )
}