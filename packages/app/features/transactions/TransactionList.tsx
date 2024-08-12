import { ListItem, Paragraph, Text, SizableStack, YStack, SizableText, XStack, H1, H3, Spacer, Separator, XGroup, YGroup, H5, Stack } from "@my/ui"
import { ArrowDownRight, ArrowUpLeft, ArrowUpRight, Bitcoin, DollarSign, Euro, Router } from "@tamagui/lucide-icons"
import { useState } from "react"
import { useRouter } from "solito/navigation"

export const dummyData = [
  {
    id: "1",
    name: "Expense 1",
    amount: 123.2,
    currency: "EUR",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: Date.now(),
    type: "expense"
  },
  {
    id: "2",
    name: "Bäckerei",
    amount: 12.20,
    from: "bc12399239210",
    to: "DE12 1923 2942 2391 23923",
    currency: "EUR",
    date: Date.now(),
    type: "expense"
  },
  {
    id: "3",
    name: "Income 1",
    amount: 20.2,
    from: "bc23848kj234ajdf",
    to: "bc12399239210",
    currency: "SAT",
    date: Date.now(),
    type: "income"
  },
  {
    id: "4",
    name: "Geld für das Einkaufen von Laura",
    amount: 20.2,
    currency: "EUR",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: Date.now(),
    type: "income"
  },
  {
    id: "5",
    name: "Wilhelma",
    amount: 120.2,
    currency: "EUR",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: Date.now(),
    type: "expense"
  },
  {
    id: "6",
    name: "Zug Ticket",
    amount: 40.2,
    currency: "EUR",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: Date.now(),
    type: "expense"
  },
  {
    id: "7",
    name: "Freibad",
    amount: 10.75,
    currency: "EUR",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: Date.now(),
    type: "expense"
  },
]
export const TransactionList = (props) => {
  const [transactions, setTransactions] = useState(dummyData)

  const router = useRouter()

  function handleTransactionPress(transactionId: string) {
    router.push("/transaction/" + transactionId)
  }
  return (
    <Stack style={{ ...props }}>
      <H3>Transactions</H3>
      <Spacer size="$3" />
      {
        transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            icon={transaction.type === "income" ? <ArrowDownRight size="$1.5" /> : <ArrowUpRight size="$1.5" />}
            size="$4"
            width="99%"
            miw={320}
            margin="$1"
            borderWidth={3}
            borderRadius={10}
            borderColor="$backgroundFocus"
            color={transaction.type === "income" ? "$color.green10Light" : "$color.red10Light"}
            hoverTheme
            onPress={() => handleTransactionPress(transaction.id)}
            title={<SizableText size="$6">{transaction.name}</SizableText>}
            gap="$1.5"
          >
            <YStack ai="flex-start">
              <Paragraph size="$3">{new Date(transaction.date).toLocaleString()}</Paragraph>
            </YStack>
            <XStack jc="flex-end" ai="center">
              <ListItem.Text fontSize={18} textAlign="right" >
                {transaction.amount + " "}
              </ListItem.Text>
              {transaction.currency === "EUR" ? <Euro size="$1" /> :
                transaction.currency === "SAT" ? <Bitcoin /> :
                  <DollarSign />
              }
            </XStack>
          </ListItem>
        ))
      }
    </Stack >
  )
}