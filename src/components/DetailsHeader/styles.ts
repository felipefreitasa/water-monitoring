import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 54 : 42
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: Platform.OS === 'ios' ? 50 : 38
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#fbfafc',
    alignSelf: 'center',
  }
})