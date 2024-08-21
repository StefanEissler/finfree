import { isWeb, ListItem, SwitchThemeButton, YGroup } from "@my/ui"
import { Bell, DollarSign, Languages, Lock, Sun } from "@tamagui/lucide-icons"
import { useRouter } from "solito/router"

export const SettingsList = () => {
  const router = useRouter()

  return (
    <YGroup alignSelf="center" hoverTheme bordered>
      <YGroup.Item>
        <ListItem
          icon={Lock}
          size="$6"
          hoverTheme
          title="Recovery Seed"
          onPress={() => router.push("/setting/account")}
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={DollarSign}
          size="$6"
          hoverTheme
          title="Currency Settings"
          onPress={() => router.push("/setting/currency")}
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={Languages}
          size="$6"
          hoverTheme
          title="Language Settings"
          onPress={() => router.push("/setting/language")}
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={Bell}
          size="$6"
          hoverTheme
          title="Notification Settings"
          onPress={() => router.push("/setting/notification")}
        />
      </YGroup.Item>
      {isWeb && (
        <YGroup.Item>
          <ListItem
            icon={Sun}
            size="$6"
            hoverTheme
          >
            <SwitchThemeButton />
          </ListItem>
        </YGroup.Item>
      )}
    </YGroup>
  )
}