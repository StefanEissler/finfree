import {
  Separator,
  YStack,
  Stack,
  isWeb,
  H1,
  SwitchThemeButton,
  XStack,
} from '@my/ui'
import { useLink } from 'solito/navigation'
import { TransactionList } from '../transactions/TransactionList'
import { HomeChartJS } from './HomeChartJS'


export function HomeScreenWeb({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })


  return (
    <YStack f={1} w="100%" jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <XStack>
        <HomeChartJS />
        <YStack gap="$4">
          <H1>Welcome to FinFree</H1>
          <Separator />
          <Stack margin="$2">
            <TransactionList />
          </Stack>
        </YStack>
      </XStack>
    </YStack>
  )
}