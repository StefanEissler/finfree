import { H1, H3, Paragraph, Stack, XStack } from '@my/ui';
import { useParams } from 'solito/navigation';
import { RecoverySeed } from './RecoverySeed';
import { CurrencySetting } from './CurrencySetting';
import { Flag } from '@tamagui/lucide-icons';
import { NotficationSetting } from './NotificationSetting';

type SettingsDetailScreenParam = {
  name: string
}

export const SettingDetailScreen = () => {
  const { name } = useParams<SettingsDetailScreenParam>()

  if (name === "account") {
    return <RecoverySeed />
  }

  if (name === "currency") {
    return <CurrencySetting />
  }

  if (name === "language") {
    return (
      <Stack f={1} backgroundColor="$background" p={10} gap="$3">
        <H3>Language Settings</H3>
        <XStack gap="$5">
          <Paragraph fontSize={20}>Language is set to ENGLISH</Paragraph>
          <Flag />
        </XStack>
      </Stack>
    )
  }

  if (name === "notification") {
    return <NotficationSetting />
  }

  return (
    <H1>{name.toUpperCase()}</H1>
  )
}