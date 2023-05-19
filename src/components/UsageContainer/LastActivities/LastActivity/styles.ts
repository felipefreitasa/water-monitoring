import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Platform.OS === 'ios' ? 16 : 12,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 45,
    width: 45,
    backgroundColor: '#E5F4FA',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  informationsTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#182055'
  },
  informationsSubtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#C5C4CB'
  },
  waterSpent: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 15,
    color: '#182055'
  }
})