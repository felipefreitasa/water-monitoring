import { SafeAreaView } from 'react-native-safe-area-context'

import { ChipCard } from '../../components/ChipCard'
import { TimeFilter } from '../../components/TimeFilter'
import { HomeHeader } from '../../components/HomeHeader'
import { CircleChart } from '../../components/CircleChart'
import { DetailsHeader } from '../../components/DetailsHeader'
import { UsageContainer } from '../../components/UsageContainer'
import { EspecifcTimeFilter } from '../../components/EspecifTimeFilter'

import { useContent } from '../../hooks/useContent'

import { styles } from './styles'

export function Home() {

  const { expanded } = useContent()

  return (
    <SafeAreaView style={styles.container}>

      {expanded ? (
        <>
          <DetailsHeader/>
          <TimeFilter/>
          <EspecifcTimeFilter/>
        </>
      ) : (
        <>
          <HomeHeader />
          <CircleChart />
          <ChipCard />
        </>
      )}

      <UsageContainer/>
    </SafeAreaView>
  )
}