import {
  Separator,
  YStack,
  Stack,
  isWeb,
  ScrollView,
} from '@my/ui'
import { useLink } from 'solito/navigation'
import { HomeChart } from './HomeChart'
import { TransactionList, dummyData } from '../transactions/TransactionList'
import { CurrentBalance } from './CurrentBalance'


export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })


  return (
    <YStack w="100%" p="$1" alignContent='center' bg="$background" >
      <YStack marginTop="$7" ai="center">
        <CurrentBalance props={{ marginTop: "$4" }} />
        <ScrollView height="100%" w="100%" p="$1">
          <HomeChart />
          <Separator m="$3" />
          <Stack p="$2">
            <TransactionList />
          </Stack>
        </ScrollView>
      </YStack>
    </YStack >
  )
}