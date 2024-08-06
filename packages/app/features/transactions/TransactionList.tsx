import { ListItem, Paragraph, Text, SizableStack, YStack, SizableText, XStack, H1, H3, Spacer, Separator, XGroup, YGroup, H5 } from "@my/ui"
import { ArrowDownRight, ArrowUpLeft, ArrowUpRight, Bitcoin, DollarSign, Euro, Router } from "@tamagui/lucide-icons"
import { useState } from "react"
import { useRouter } from "solito/navigation"

const dummyData = [
  {
    id: "1",
    name: "Expense 1",
    amount: 123.2,
    currency: "EUR",
    date: Date.now(),
    type: "expense"
  },
  {
    id: "2",
    name: "Expense 1",
    amount: 400.50,
    currency: "EUR",
    date: Date.now(),
    type: "expense"
  },
  {
    id: "3",
    name: "Income 1",
    amount: 20.2,
    currency: "SAT",
    date: Date.now(),
    type: "income"
  }
]
export const TransactionList = () => {
  const [transactions, setTransactions] = useState(dummyData)

  const router = useRouter()

  function handleTransactionPress(transactionId: string) {
    router.push("/transaction/" + transactionId)
  }
  return (
    <YStack>
      <H3>Transactions</H3>
      <Spacer size="$3" />
      {transactions.map((transaction) => (
        <XGroup
          key={transaction.id}
          miw={250}
          maw="100%"
          margin="$1"
        >
          <XGroup.Item>
            <ListItem
              icon={transaction.type === "income" ? <ArrowDownRight size="$1.5" /> : <ArrowUpRight size="$1.5" />}
              size="$4"
              backgroundColor="$backgroundFocus"
              color={transaction.type === "income" ? "$color.green10Light" : "$color.red10Light"}
              hoverTheme
              title={transaction.name}
              subTitle={new Date(transaction.date).toLocaleString()}
              onPress={() => handleTransactionPress(transaction.id)}
            >
              <XStack ai="center">
                <ListItem.Text fontSize={18} textAlign="right" >
                  {transaction.amount + " "}
                </ListItem.Text>
                {transaction.currency === "EUR" ? <Euro size="$1" /> :
                  transaction.currency === "SAT" ? <Bitcoin /> :
                    <DollarSign />
                }
              </XStack>
            </ListItem>
          </XGroup.Item>
        </XGroup>
      ))}
    </YStack >
  )
}