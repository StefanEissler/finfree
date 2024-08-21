import { Tabs } from "expo-router";
import { Home, Settings } from '@tamagui/lucide-icons'
import { Stack, useTheme } from "@my/ui";
import { SendReciveSheet } from 'app/features/sendorrecive/SendReciveSheet'
import Svg, { Path } from "react-native-svg";

export default function TabsLayout() {

  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.color10.val,
        tabBarStyle: {
          height: "12%",
          backgroundColor: theme.background.val,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          marginBottom: 14,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: () => <Home />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='send'
        options={{
          title: 'Send',
          tabBarButton(props) {
            return (
              <Stack position="relative" width={70} ai="center">
                <TabBg color={theme.background.val} style={{ position: "absolute", top: 0 }} />
                <SendReciveSheet {...props} buttonStyle={{
                  position: "absolute",
                  width: "50%",
                  top: -25.5
                }}
                />
              </Stack>
            )
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: () => <Settings />,
        }}
      />
      <Tabs.Screen
        name='recive'
        options={{
          href: null
        }}
      />
    </Tabs>
  )
}

const TabBg = ({ color = '#FFFFFF', ...props }) => {
  return (
    <Svg width={100} height={70} viewBox="0 0 75 61" {...props}>
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </Svg>
  );
};
