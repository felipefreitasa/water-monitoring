import { useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacityProps, TouchableOpacity, Platform } from 'react-native'
import { Canvas, Easing, Path, Skia, runTiming, useValue } from '@shopify/react-native-skia'

import { styles } from './styles'

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  backgroundColor: string;
  descriptionTitle: string;
  iconBackgroundColor: string;
  descriptionSubtitle: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

const CHECK_SIZE = Platform.OS === 'ios' ? 42 : 35
const CHECK_STROKE = 6
const RADIUS = (CHECK_SIZE - CHECK_STROKE)

export function FixtureCard({ 
  icon, 
  title, 
  subtitle, 
  backgroundColor, 
  descriptionTitle, 
  descriptionSubtitle, 
  iconBackgroundColor,
  ...rest
}: Props) {

  const percentage = useValue(0)

  const path = Skia.Path.Make()
  path.addCircle(CHECK_SIZE, CHECK_SIZE, RADIUS)

  useEffect(() => {
    setTimeout(() => {
      runTiming(percentage, 0.8, { duration: 800, easing: Easing.ease })
    }, 350)
  }, [])

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor }]}
      activeOpacity={0.8}
      {...rest}
    >
      <MaterialCommunityIcons 
        name={icon} 
        size={Platform.OS === 'ios' ? 40 : 34} 
        color="#fefefe"
        style={styles.icon}
      />

      <Canvas style={styles.circleChart}>
        <Path 
          path={path}
          color={iconBackgroundColor}
          style='stroke'
          strokeWidth={CHECK_STROKE}
        />

        <Path 
          path={path}
          color='#fefefe'
          style='stroke'
          strokeWidth={CHECK_STROKE}
          start={0}
          end={percentage}
        />

        <Path 
          path={path}
          color={iconBackgroundColor}
          strokeWidth={CHECK_STROKE}
        />
      </Canvas>

      <View>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>

      <View  style={styles.separator}/>

      <View>
        <Text style={styles.descriptionTitle}>
          {descriptionTitle}
        </Text>

        <Text style={styles.subtitle}>
          {descriptionSubtitle}
        </Text>
      </View>      
    </TouchableOpacity>
  )
}