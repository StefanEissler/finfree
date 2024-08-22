import { Stack, Card, H5, XStack, Paragraph, Spacer, useToastController, Button } from "@my/ui"
import { ClipboardCopy, ClipboardCheck } from "@tamagui/lucide-icons"
import { useState } from "react"


export const ReciveMoney = () => {
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false)
  const address = "bc124kaösde9skdje93kjdfi93kdf93"

  const toast = useToastController()

  // not working for nextjs
  const copyAddress = async () => {
    navigator.clipboard.writeText(address)
    setCopiedToClipBoard(true)
    toast.show("Address copied to Clipboard")
  }

  return (
    <Stack width="95%">
      <Card p="$3">
        <H5>Your address:</H5>
        <XStack ai="center" gap="$2">
          <Paragraph>bc124kaösde9skdje93kjdfi93kdf93</Paragraph>

          {!copiedToClipBoard ?
            <Button icon={ClipboardCopy} size="$4" onPress={() => copyAddress()} hoverTheme={false} chromeless /> :
            <Button icon={ClipboardCheck} size="$4" disabled chromeless />
          }
        </XStack>
      </Card>
      <Spacer m="$0.5" />
    </Stack>
  )
}