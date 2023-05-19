import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

type Props = TouchableOpacityProps & {
  title: string;
}

export function ItemFilter({ title, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}