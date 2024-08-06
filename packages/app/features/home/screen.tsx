import {
  Separator,
  YStack,
  Stack,
  isWeb,
} from '@my/ui'
import { useLink } from 'solito/navigation'
import { HomeChart } from './HomeChart'
import { TransactionList } from '../transactions/TransactionList'


export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })


  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <YStack gap="$4">
        <HomeChart />
        <Separator />
        <Stack margin="$2">
          <TransactionList />
        </Stack>
      </YStack>
    </YStack>
  )
}