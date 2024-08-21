import { H3, Paragraph, Stack, Switch, XStack, useToastController } from '@my/ui';
import { useEffect, useRef, useState } from 'react';



export const NotficationSetting = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true)

  const toast = useToastController()

  useEffect(() => {
    if (isChecked)
      toast.show("Notifications are turned on")
    else
      toast.show("Notfications are turned off")

  }, [isChecked])

  return (
    <Stack f={1} backgroundColor="$background" p={10} gap="$3">
      <H3>Notifications</H3>
      <XStack jc="space-between">
        <Paragraph fontSize={20}>Push Notifications:</Paragraph>
        <Switch htmlFor="notification" defaultChecked={isChecked} onCheckedChange={() => setIsChecked(!isChecked)}>
          <Switch.Thumb animation="quick" />
        </Switch>
      </XStack>
    </Stack>
  )
}