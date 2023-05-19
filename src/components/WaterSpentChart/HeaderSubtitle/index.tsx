import { Text, View } from 'react-native'

import { styles } from './styles'

type Props = {
  title: string;
  subtitle: string;
}

export function HeaderSubtitle({ title, subtitle }: Props) {
  return (
    <View style={styles.headerSubtitleContainer}>
      <Text style={styles.headerTitle}>
        {title}
      </Text>

      <Text style={styles.headerSubtitle}>
        {subtitle}
      </Text>
    </View>
  )
}