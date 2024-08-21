import { TransactionScreen } from "app/features/transactions/screen"
import { Stack } from "expo-router"

export default function Page() {

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Transaction',
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <TransactionScreen />
    </>
  )
}