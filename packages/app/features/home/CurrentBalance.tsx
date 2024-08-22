import { Paragraph, SizableText, Spacer, XStack, YStack } from "@my/ui"
import { Bitcoin } from "@tamagui/lucide-icons"
import { BalanceContext } from "../../hooks/BalanceContext"
import { useContext } from "react"
import { CurrencyContext } from "../../hooks/CurrencyContext"
import { btcToSat, satToBtc } from "../../hooks/CurrencyHelpers"

export const CurrentBalance = (props) => {
  const { currentBalanceAmount } = useContext(BalanceContext)
  const { currency } = useContext(CurrencyContext)

  return (
    <YStack style={{ ...props }} justifyContent="center" ai="center" >
      <Paragraph size="$5" fontStyle="unset">Current Balance</Paragraph>
      <XStack borderRadius="$3" ai="center">
        <SizableText fontFamily="$heading" color="$accentColor" size="$10" >
          {currency === "BTC" ? satToBtc(currentBalanceAmount).toFixed(8) : currentBalanceAmount}</SizableText>
        <Spacer size="$2" />
        {currency === "BTC" ?
          <Bitcoin size="$5" color="$accentColor" /> :
          <Paragraph size="$5" color="$accentColor">SAT</Paragraph>
        }
      </XStack>
    </YStack>
  )
}