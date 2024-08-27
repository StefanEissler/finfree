import {
  Separator,
  YStack,
  Stack,
  H1,
  XStack,
  Card,
} from '@my/ui'
import { TransactionList } from '../transactions/TransactionList'
import { HomeChartJS } from './HomeChartJS'
import { CurrentBalance } from './CurrentBalance'
import { SendReciveSheet } from '../sendorrecive/SendReciveSheet'


export function HomeScreenWeb() {

  return (
    <YStack f={1} w="100%" jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <Stack flex={1} flexWrap='wrap' flexDirection='row'>
        <HomeChartJS />
        <Separator vertical m="$10" $sm={{ display: "none" }} />
        <YStack ai="center" gap="$4">
          <H1>Welcome to FinFree</H1>
          <Card
            p="$4.5"
            m="$1"
            elevate
            width="100%"
          >
            <XStack gap="$5" jc="space-evenly" ai="center">
              <CurrentBalance />
              <SendReciveSheet buttonStyle={{ size: "$7" }} />
            </XStack>
          </Card>
          <Separator />
          <Stack alignSelf='stretch' margin="$2">
            <TransactionList />
          </Stack>
        </YStack>
      </Stack >
    </YStack >
  )
}