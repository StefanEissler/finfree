import { Avatar, Paragraph, Stack } from '@my/ui'
import { LinearGradient } from 'tamagui/linear-gradient'
import { useParams, useRouter } from 'solito/navigation'
import { exampleUser } from './UserHeader'
import { FinancialGoal } from './FinancialGoal'
import { UserForm } from './UserForm'

export function UserDetailScreen() {
  const router = useRouter()
  const { id } = useParams()

  return (
    <Stack f={1} ai="center" bg="$background">
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
      <Paragraph>{`User ID: ${id}`}</Paragraph>
      {/*<UserForm />*/}
    </Stack>
  )
}
