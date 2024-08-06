import { H1, ListItem, SwitchThemeButton, YGroup } from "@my/ui"
import { Bell, DollarSign, Languages, Sun, User } from "@tamagui/lucide-icons"

export const SettingsList = () => {

  return (
    <YGroup alignSelf="center" bordered>
      <YGroup.Item>
        <ListItem
          icon={User}
          size="$6"
          hoverTheme
          title="Account Settings"
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={DollarSign}
          size="$6"
          hoverTheme
          title="Currency Settings"
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={Languages}
          size="$6"
          hoverTheme
          title="Language Settings"
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={Bell}
          size="$6"
          hoverTheme
          title="Notfication Settings"
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          icon={Sun}
          size="$6"
          hoverTheme
        >
          <SwitchThemeButton />
        </ListItem>
      </YGroup.Item>
    </YGroup>
  )
}