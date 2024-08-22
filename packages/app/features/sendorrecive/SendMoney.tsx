import { Button, Card, Input, Paragraph, Spacer, Stack, XGroup, useToastController } from "@my/ui"
import { Send } from "@tamagui/lucide-icons"
import { useState } from "react"

export const SendMoney = () => {
  const [address, setAdress] = useState("")
  const toast = useToastController()


  const onSendMoney = () => {
    if (address === "") {
      toast.show("Give a valide address in the Input Field")
      return
    }
    toast.show(`Money send to: ${address}`)
    return
  }

  return (
    <Stack w="90%">
      <Card p="$5" width="100%">
        <Paragraph>Enter a Bitcoin or Ligthing Adress:</Paragraph>
        <Spacer m="$0.5" />
        <XGroup width="100%">
          <XGroup.Item>
            <Input f={1} value={address} onChangeText={setAdress} />
          </XGroup.Item>
          <XGroup.Item>
            <Button icon={Send} onPress={onSendMoney}></Button>
          </XGroup.Item>
        </XGroup>
      </Card>
    </Stack>
  )
}