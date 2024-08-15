import { H1 } from '@my/ui';
import { useParams } from 'solito/navigation';

type SettingsDetailScreenParam = {
  name: string
}

export const SettingDetailScreen = () => {
  const { name } = useParams<SettingsDetailScreenParam>()
  return (
    <H1>{name.toUpperCase()}</H1>
  )
}