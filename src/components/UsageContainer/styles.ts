import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    height: Platform.OS === 'ios' ? '56%' : '50%', 
    width: '100%', 
    position: 'absolute', 
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 25,
  },
  content: {
    paddingHorizontal: 20,
  }
})

