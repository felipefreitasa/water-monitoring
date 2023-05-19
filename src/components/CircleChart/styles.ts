import { Platform, StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: { 
    width: '100%', 
    height: '25%', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
  },
  charContainer: {
    position:  'absolute'
  },
  chart: { 
    transform: [{ rotate: '145deg' }] ,
    alignSelf: 'center',
    borderRadius: 1000,
    bottom: 140
  },
  textsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', 
    top: Platform.OS === 'ios' ? 100 : 55
  },
  title: {
    fontFamily: 'Poppins_500Medium',
    color: '#6f82d8',
    fontSize: Platform.OS === 'ios' ? 16 : 14
  },
  subtitle: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fbfafc',
    fontSize: Platform.OS === 'ios' ? 32 : 28
  }
})

