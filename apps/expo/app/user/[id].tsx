import { UserDetailScreen } from 'app/features/user/detail-screen'
import { Stack } from 'expo-router'
import { useTheme } from '@my/ui'
import { useParams } from 'solito/navigation';

export default function Screen() {
  const theme = useTheme()
  const { id } = useParams()

  return (
    <>
      <Stack.Screen
        options={{
          title: id,
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <UserDetailScreen />
    </>
  )
}
