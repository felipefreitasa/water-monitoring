import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  waterSpent: string;
}

export function LastActivity({ icon, title, subtitle, waterSpent }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={22} color="#5CC6E1" />
        </View>

        <View>
          <Text style={styles.informationsTitle}>
            {title}
          </Text>

          <Text style={styles.informationsSubtitle}>
            {subtitle}
          </Text>
        </View>
      </View>

      <Text style={styles.waterSpent}>
        {waterSpent}
      </Text>
    </View>
  )
}