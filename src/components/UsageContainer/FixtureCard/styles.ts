import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width:  Platform.OS === 'ios' ? 170 : 150,
    height: Platform.OS === 'ios' ? 290 : 250,
    borderRadius: 20,
    padding: 20,
    marginRight: 12,
    justifyContent: 'space-between'
  },
  icon: { 
    position: 'absolute', 
    left: Platform.OS === 'ios' ? 41 : 37, 
    top: Platform.OS === 'ios' ? 41 : 37, 
    zIndex: 1
  },
  circleChart: { 
    height: Platform.OS === 'ios' ? 85 : 70, 
    width: Platform.OS === 'ios' ? 85 : 70, 
    transform: [{ rotate: '270deg' }]
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 24 : 20,
    color: '#fefefe',
    fontFamily: 'Poppins_600SemiBold'
  },
  subtitle: {
    fontSize: Platform.OS === 'ios' ? 16 : 14,
    color: '#fefefe',
    fontFamily: 'Poppins_400Regular'
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#fefefe33'
  },
  descriptionTitle: {
    fontSize: 16,
    color: '#fefefe',
    fontFamily: 'Poppins_600SemiBold'
  }
})

