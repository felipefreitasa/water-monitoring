import { ScrollView } from 'react-native'
import Animated, { FadeIn, FadeInRight } from 'react-native-reanimated'

import { useContent } from '../../../hooks/useContent'

import { Header } from '../Header'
import { FixtureCard } from '../FixtureCard'

import { styles } from './styles'

export function FixtureCards() {

  const { setIsExpanded, setDetailsHeaderTitle } = useContent()

  function handleCardPress(detailsHeaderTitle: string) {    
    setIsExpanded(true)
    setDetailsHeaderTitle(detailsHeaderTitle)
  }

  return (
    <>
       <Animated.View 
        entering={FadeIn.duration(800).delay(600)}
        style={{ paddingHorizontal: 20 }}  
      >
        <Header 
          title='Usage by fixture'
          buttonTitle='See all'
        />
      </Animated.View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.fixtureCards}
      >
        <Animated.View entering={FadeInRight.duration(250).delay(600)}>
          <FixtureCard
            icon='toilet'
            title='Toilet'
            subtitle='26.3 gal.'
            descriptionTitle='Avg. use'
            backgroundColor='#F7C168'
            descriptionSubtitle='54.2 gal.'
            iconBackgroundColor='#E1B468'
            onPress={() => handleCardPress('Toilet')}
          />
        </Animated.View>

        <Animated.View entering={FadeInRight.duration(250).delay(630)}>
          <FixtureCard
            icon='shower'
            title='Shower'
            subtitle='17.8 gal.'
            descriptionTitle='Avg. use'
            backgroundColor='#EE667D'
            descriptionSubtitle='67.9 gal.'
            iconBackgroundColor='#DC627B'
            onPress={() => handleCardPress('Shower')}
          />
        </Animated.View>

        <Animated.View entering={FadeInRight.duration(250).delay(770)}>
          <FixtureCard
            icon='watering-can-outline'
            title='Faucet'
            subtitle='15.2 gal.'
            descriptionTitle='Avg. use'
            backgroundColor='#6CC887'
            descriptionSubtitle='29.8 gal.'
            iconBackgroundColor='#64B880'
            onPress={() => handleCardPress('Faucet')}
          />
        </Animated.View>
      </ScrollView>
    </>
  )
}