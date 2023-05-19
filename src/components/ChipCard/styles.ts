import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#182b95',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 200,
    marginTop: Platform.OS === 'ios' ? 40 : 24
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
    marginTop: 2
  },
  text: {
    color: '#9da4ce',
    fontSize: Platform.OS === 'ios' ? 16 : 14,
    fontFamily: 'Poppins_400Regular',
  },
  highlight: {
    color: '#67bd7c'
  }
})

