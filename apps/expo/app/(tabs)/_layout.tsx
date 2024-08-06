import { Tabs } from "expo-router";
import { Home, Settings } from '@tamagui/lucide-icons'

export default function TabsLayout() {

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: () => <Home />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: () => <Settings />,
        }}
      />
    </Tabs>
  )
}