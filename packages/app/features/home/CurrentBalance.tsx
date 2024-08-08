import { H2, H3, Paragraph, SizableText, Spacer, XStack, YStack } from "@my/ui"
import { Bitcoin } from "@tamagui/lucide-icons"
import { useState } from "react"

export const CurrentBalance = (props) => {
  const [balance, setBalance] = useState(100)

  return (
    <YStack style={{ ...props }} justifyContent="center" >
      <Paragraph size="$5" fontStyle="unset">Current Balance</Paragraph>
      <XStack borderRadius="$3" ai="center">
        <SizableText fontFamily="$heading" color="$accentColor" size="$11" >{balance}</SizableText>
        <Spacer size="$2" />
        <Bitcoin size="$5" color="$accentColor" />
      </XStack>
    </YStack>
  )
}