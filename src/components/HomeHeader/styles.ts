import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 54 : 42
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 200
  }
})