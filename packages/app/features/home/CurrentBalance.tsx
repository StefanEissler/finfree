import { H2, H3, Paragraph, SizableText, Spacer, XStack, YStack } from "@my/ui"
import { Bitcoin } from "@tamagui/lucide-icons"
import { BalanceContext } from "packages/app/hooks/BalanceContext"
import { useContext, useState } from "react"

export const CurrentBalance = (props) => {
  const { currentBalanceAmount } = useContext(BalanceContext)

  return (
    <YStack style={{ ...props }} justifyContent="center" >
      <Paragraph size="$5" fontStyle="unset">Current Balance</Paragraph>
      <XStack borderRadius="$3" ai="center">
        <SizableText fontFamily="$heading" color="$accentColor" size="$11" >{currentBalanceAmount}</SizableText>
        <Spacer size="$2" />
        <Bitcoin size="$5" color="$accentColor" />
      </XStack>
    </YStack>
  )
}