import { YStack, XStack, SizableText, Spacer, Progress, Button, H5, Paragraph } from "@my/ui"
import { Bitcoin, Edit3 } from "@tamagui/lucide-icons"
import { useContext, useState } from "react"
import { BalanceContext } from "packages/app/hooks/BalanceContext";
import { FinancialGoalForm } from "./FinancialGoalForm";

export const FinancialGoal = () => {
  const { currentBalanceAmount, financialGoalAmount } = useContext(BalanceContext)
  const [sheetFormOpen, setSheetFormOpen] = useState(false)

  return (
    <YStack ai="center" jc="center" p="$3">
      <H5>Your Financial Goal is to reach:</H5>
      <Spacer margin="$1" />
      <YStack maw="100%">
        <XStack borderRadius="$3" jc="center" ai="center">
          <SizableText fontFamily="$body" color="$accentColor" size="$10" >{financialGoalAmount}</SizableText>
          <Spacer size="$2" />
          <Paragraph size="$3" color="$accentColor">SAT</Paragraph>
        </XStack>
        <Spacer margin="$1" />
        <Progress
          value={currentBalanceAmount / 100}
          max={financialGoalAmount / 100}
        >
          <Progress.Indicator animation="bouncy" backgroundColor="$accentColor" />
        </Progress>
        <Button alignSelf="center" margin="$5" icon={Edit3} size="$4" onPress={() => setSheetFormOpen(!sheetFormOpen)} circular />
        <FinancialGoalForm sheetOpen={sheetFormOpen} setSheetOpen={setSheetFormOpen} />
      </YStack>
    </YStack>
  )
}
