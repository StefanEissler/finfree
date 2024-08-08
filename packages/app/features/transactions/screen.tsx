import { Card, H1, H2, H4, Paragraph, Separator, Spacer, Stack, Text, XStack, YStack } from "@my/ui"
import { useState } from "react"
import { useParams } from "solito/navigation"
import { dummyData } from "./TransactionList"
import { ArrowDownRight, ArrowUpRight, Bitcoin, DollarSign, Euro } from "@tamagui/lucide-icons"

type TransactionParam = {
  id: string
}

const dummyTransaction = {
  id: 10,
  name: "Bäckerei",
  amount: 30.2,
  currency: "EUR",
  date: Date.now(),
  type: "expense"
}

export const TransactionScreen = () => {
  const { id } = useParams<TransactionParam>()

  const [transaction, setTransaction] = useState(dummyData[1])

  if (!transaction) {
    <H1>Transaction not found</H1>
  }

  return (
    <YStack backgroundColor="$background" height="100%" width="100%">
      <Card
        ai="center"
        padding="$4"
        margin="$5"
      >
        <Spacer />
        <H2>{transaction.name}</H2>
        <Separator alignSelf="stretch" />
        <XStack m="$5" ai="center" gap="$2">
          {transaction.type === "income" ?
            <ArrowDownRight
              size="$5"
              color={transaction.type === "income" ? "$color.green10Light" : "$color.red10Light"}
            /> :
            <ArrowUpRight
              size="$5"
              color={transaction.type === "income" ? "$color.green10Light" : "$color.red10Light"}
            />
          }
          <Text fontSize="$9">{transaction.amount}</Text>
          {transaction.currency === "EUR" ? <Euro size="$2" /> :
            transaction.currency === "SAT" ? <Bitcoin size="$2" /> :
              <DollarSign size="$2" />
          }
        </XStack>
        <Spacer size="$5" />
        <XStack p="$2" alignSelf="flex-start">
          <H4 textAlign="left">FROM:</H4>
          <Spacer />
          <Paragraph>{transaction.from}</Paragraph>
        </XStack>
        <XStack p="$2" alignSelf="flex-start">
          <H4 textAlign="left">TO:</H4>
          <Spacer />
          <Paragraph>{transaction.to}</Paragraph>
        </XStack>
      </Card>
      <Stack f={1} jc="flex-end">
        <Paragraph f={1} alignSelf="center" size="$2">id: {id}</Paragraph>
      </Stack>
    </YStack>
  )
}