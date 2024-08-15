import { Avatar, Button, H3, Paragraph, Progress, SizableText, Spacer, XStack, YStack } from '@my/ui'
import { LinearGradient } from 'tamagui/linear-gradient'

import { Bitcoin, ChevronLeft } from '@tamagui/lucide-icons'
import { useParams, useRouter } from 'solito/navigation'
import { exampleUser } from './UserHeader'
import { FinancialGoal } from './FinancialGoal'

export function UserDetailScreen() {
  const router = useRouter()
  const { id } = useParams()

  return (
    <YStack f={1} ai="center" bg="$background">
      <LinearGradient
        width="100%"
        height={200}
        colors={['$color0', '$color10']}
        start={[0, 1]}
        end={[0, 0]}
        borderBottomEndRadius={100}
        borderBottomStartRadius={100}
      />
      <Avatar
        zIndex={20}
        top={-150}
        alignSelf='center'
        m="$4"
        padding="$10"
        size="$15"
        circular
      >
        <Avatar.Image
          src={exampleUser.picture}
        />
        <Avatar.Fallback backgroundColor="blue" />
      </Avatar>
      <Paragraph ta="center" fow="700" color="$blue10" >{`User ID: ${id}`}</Paragraph>
      <FinancialGoal />
    </YStack>
  )
}
