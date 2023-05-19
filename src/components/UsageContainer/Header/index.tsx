import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

type Props = {
  title: string;
  buttonTitle: string;
}

export function Header({ title, buttonTitle }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        {title}
      </Text>

      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.button}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  )
}