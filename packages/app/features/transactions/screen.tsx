import { Card, H1, H2, H4, Paragraph, Separator, Spacer, Spinner, Stack, Text, XStack, YStack } from "@my/ui"
import { Suspense, useContext, useEffect, useState } from "react"
import { useParams } from "solito/navigation"
import { dummyData } from "./TransactionList"
import { ArrowDownRight, ArrowUpRight, Bitcoin } from "@tamagui/lucide-icons"
import { CurrencyContext } from "../../hooks/CurrencyContext"
import { satToBtc } from "../../hooks/CurrencyHelpers"

type TransactionParam = {
  id: string
}

export const TransactionScreen = () => {
  const { id } = useParams<TransactionParam>()
  const [transaction, setTransaction] = useState<any>(null)

  useEffect(() => {
    const transactionData = dummyData.find(item => item.id === id);
    setTransaction(transactionData)
  }, [id])

  const { currency } = useContext(CurrencyContext)

  if (!transaction) {
    return (<H1>Transaction not found</H1>)
  }

  return (
    <Suspense fallback={<Spinner />}>
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
                color="$color.green10Light"
              /> :
              <ArrowUpRight
                size="$5"
                color="$color.red10Light"
              />
            }
            <Text fontSize="$9">
              {currency === "BTC" ? satToBtc(transaction.amount).toFixed(8) : transaction.amount}
            </Text>
            {currency === "BTC" ?
              <Bitcoin size="$2" /> :
              <Paragraph size="$2">SAT</Paragraph>
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
    </Suspense>
  )
}
