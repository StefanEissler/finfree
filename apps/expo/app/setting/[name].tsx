import { Stack } from "expo-router"
import { SettingDetailScreen } from "app/features/settings/SettingDetailScreen"

export default function Page() {

  return (
    <>
      <Stack.Screen
        options={{
          title: "Setting",
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <SettingDetailScreen />
    </>
  )
}