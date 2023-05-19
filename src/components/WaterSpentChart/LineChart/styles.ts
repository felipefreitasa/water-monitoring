import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  chart: {
    width: 5,
    height: 160,
    borderRadius: 100,
    backgroundColor: '#68BAD5',
    overflow: 'hidden',
    justifyContent: 'flex-end'
  },
  progress: {
    width: '100%',
    backgroundColor: '#F2FFFF',
    borderRadius: 100,
  },
  day: {
    color: '#d9fdfe',
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    marginTop: 24
  }
})

