import { Button, H5, SizableText, Slider, Spacer, XStack, YStack } from "@my/ui"
import { Bitcoin } from "@tamagui/lucide-icons"
import { Sheet, useSheet } from '@tamagui/sheet'
import { BalanceContext } from "packages/app/hooks/BalanceContext"
import { useContext } from "react"

export const FinancialGoalForm = ({ sheetOpen, setSheetOpen }) => {
  const { financialGoalAmount, setFinancialGoalAmount } = useContext(BalanceContext)

  return (
    <Sheet
      modal
      open={sheetOpen}
      onOpenChange={() => setSheetOpen(!sheetOpen)}
      dismissOnSnapToBottom
      zIndex={100_000}
      animation="medium"
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle />
      <Sheet.Frame padding="$4" width="100%" jc="center" space="$5">
        <YStack gap="$5" ai="center">
          <XStack borderRadius="$3" jc="center" ai="center">
            <SizableText fontFamily="$body" color="$accentColor" size="$10" >{financialGoalAmount}</SizableText>
            <Spacer size="$2" />
            <Bitcoin size="$3" color="$accentColor" />
          </XStack>
          <Slider defaultValue={[financialGoalAmount]} onValueChange={(number) => setFinancialGoalAmount(number[0])} max={10000} step={1} width={250}>
            <Slider.Track>
              <Slider.TrackActive />
            </Slider.Track>
            <Slider.Thumb size="$2" index={0} circular />
          </Slider>
        </YStack>
      </Sheet.Frame>
    </Sheet >
  )
}