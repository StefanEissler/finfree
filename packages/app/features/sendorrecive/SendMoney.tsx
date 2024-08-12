import { Card, Input, Paragraph, Spacer, Stack } from "@my/ui"

export const SendMoney = () => {

  return (
    <Stack w="90%">
      <Card p="$5" width="100%">
        <Paragraph>Enter a Bitcoin, Ligthing or IBAN Adress:</Paragraph>
        <Spacer m="$0.5" />
        <Input />
      </Card>
    </Stack>
  )
}