import { SendOrRecive } from "app/features/sendorrecive/SendOrRecive"
import { YStack } from "@my/ui"
import { Stack } from "expo-router"


export default function Page() {

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Transaction',
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <YStack backgroundColor="$color1" f={1} ai="center" jc="center">
        <SendOrRecive />
      </YStack>
    </>
  )
}