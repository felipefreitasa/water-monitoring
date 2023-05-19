import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

import { ItemFilter } from './ItemFilter'

import { useContent } from '../../hooks/useContent'

import { styles } from './styles'

export function EspecifcTimeFilter() {

  const { setSelectedEspecificTimeFilter, selectedEspecificTimeFilter } = useContent()

  function handleSelectFilter(selectedFilterId: number) {
    setSelectedEspecificTimeFilter(selectedFilterId)
  }

  return (
    <Animated.View 
      style={styles.container}
      entering={FadeIn.duration(800)}
      exiting={FadeOut}
    >
      <ItemFilter
        title='Oct 21 - 27'
        onPress={() => handleSelectFilter(0)}
        isSelected={selectedEspecificTimeFilter === 0}
      />

      <ItemFilter
        title='Last week'
        onPress={() => handleSelectFilter(1)}
        isSelected={selectedEspecificTimeFilter === 1}
      />

      <ItemFilter
        title='This week'
        onPress={() => handleSelectFilter(2)}
        isSelected={selectedEspecificTimeFilter === 2}
      />  
    </Animated.View>
  )
}