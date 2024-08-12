import { Spacer, Stack } from "@my/ui"
import { UserHeader } from "../user/UserHeader"
import { SettingsList } from "./SettingsList"

export const SettingsScreen = () => {

  return (
    <Stack
      padding="$2"
      bg="$background"
      f={1}
    >
      <UserHeader />
      <Spacer />
      <SettingsList />
    </Stack>
  )
}