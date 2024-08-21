import { H3, Paragraph, Stack, Switch, XStack } from "@my/ui"
import { Bitcoin } from "@tamagui/lucide-icons"
import { CurrencyContext } from "packages/app/hooks/CurrencyContext"
import { useState, useContext, useEffect } from "react"

export const CurrencySetting = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { currency, setCurrency } = useContext(CurrencyContext)

  useEffect(() => {
    if (currency === "BTC") {
      setIsChecked(false)
    } else if (currency === "SAT") {
      setIsChecked(true)
    }
  }, [currency])

  const onCurrencyChange = (value: boolean) => {
    if (value) {
      setCurrency("SAT")
    } else {
      setCurrency("BTC")
    }
    setIsChecked(value)
  }

  return (
    <Stack p={10} backgroundColor="$background" f={1} gap="$5">
      <XStack ai="center" jc="space-around">
        <H3>Currency:</H3>
        <Paragraph>{isChecked ? "SAT" : <Bitcoin />}</Paragraph>
        <Stack width="$3">
          <Switch
            checked={isChecked}
            onCheckedChange={onCurrencyChange}
          >
            <Switch.Thumb animation="quick" />
          </Switch>
        </Stack>
      </XStack>
    </Stack>
  )
}
