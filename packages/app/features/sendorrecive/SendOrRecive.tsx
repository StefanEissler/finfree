import { Card, Button, H5, Image, Input, Paragraph, Spacer, Spinner, Stack, XStack } from "@my/ui"
import { ClipboardCheck, ClipboardCopy } from "@tamagui/lucide-icons"
import { useEffect, useState } from "react"
import { jsx } from "react/jsx-runtime"
//import Clipboard from "@react-native-clipboard/clipboard"
import { useSearchParams } from "solito/navigation"

type Params = { option: string }
const params = useSearchParams<Params>()

export const SendOrRecive = (params) => {
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false)

  // Needs another page for the recive part. Dosent really work...
  let option

  useEffect(() => {
    option = params?.get("option")
  }, [params]);
  console.log(params)
  //const clipboard = Clipboard

  /*
  const copyAddress = () => {
    clipboard.setString("bc124kaösde9skdje93kjdfi93kdf93");
    setCopiedToClipBoard(true)
  }
  */

  if (option === "recive") {
    return (
      <Stack width="90%">
        <Card p="$3">
          <H5>Your address:</H5>
          <XStack ai="center" gap="$2">
            <Paragraph>bc124kaösde9skdje93kjdfi93kdf93</Paragraph>
            {/*
            {!copiedToClipBoard ?
              <Button icon={ClipboardCopy} size="$7" onPress={() => copyAddress()} chromeless /> :
              <Button icon={ClipboardCheck} size="$7" disabled chromeless />
            }
              */}
          </XStack>
        </Card>
        <Spacer m="$0.5" />
        <Image />
      </Stack>
    )
  }

  return (
    <Stack width="90%">
      <Paragraph>Enter a Bitcoin, Ligthing or IBAN Adress:</Paragraph>
      <Spacer m="$0.5" />
      <Input />
    </Stack>
  )
}