import { ListItem, Paragraph, Text, SizableStack, YStack, SizableText, XStack, H1, H3, Spacer, Separator, XGroup, YGroup, H5, Stack } from "@my/ui"
import { ArrowDownRight, ArrowUpLeft, ArrowUpRight, Bitcoin, DollarSign, Euro, Router } from "@tamagui/lucide-icons"
import { CurrencyContext } from "../../hooks/CurrencyContext"
import { satToBtc } from "../../hooks/CurrencyHelpers"
import { useContext, useState } from "react"
import { useRouter } from "solito/navigation"

export const dummyData = [
  {
    id: "7",
    name: "Freibad",
    amount: 100,
    currency: "SAT",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: 1723968600000, // 2024-08-18T13:30:00
    type: "expense"
  },
  {
    id: "6",
    name: "Zug Ticket",
    amount: 402,
    currency: "SAT",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: 1721452800000, // 2024-07-20T08:00:00
    type: "expense"
  },
  {
    id: "5",
    name: "Wilhelma",
    amount: 20,
    currency: "SAT",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: 1718182800000, // 2024-06-12T11:20:00
    type: "expense"
  },
  {
    id: "4",
    name: "Geld für das Einkaufen von Laura",
    amount: 352,
    currency: "SAT",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: 1715352300000, // 2024-05-10T16:45:00
    type: "income"
  },
  {
    id: "3",
    name: "Bäckerei",
    amount: 23,
    from: "bc23848kj234ajdf",
    to: "bc12399239210",
    currency: "SAT",
    date: 1712316000000, // 2024-04-05T14:00:00
    type: "expense"
  },
  {
    id: "2",
    name: "Gehalt",
    amount: 1220,
    from: "bc12399239210",
    to: "DE12 1923 2942 2391 23923",
    currency: "SAT",
    date: 1711360500000, // 2024-03-25T09:15:00
    type: "income"
  },
  {
    id: "1",
    name: "Fender Guitar Repair",
    amount: 123,
    currency: "SAT",
    from: "bc12399239210",
    to: "DE12 3943 2942 1233 3492",
    date: 1707993000000, // 2024-02-15T10:30:00
    type: "expense"
  }
];

export const TransactionList = (props) => {
  const [transactions, setTransactions] = useState(dummyData)
  const { currency } = useContext(CurrencyContext)

  const router = useRouter()

  function handleTransactionPress(transactionId: string) {
    router.push("/transaction/" + transactionId)
  }
  return (
    <Stack style={{ ...props }}>
      <H3>Transactions</H3>
      <Spacer size="$3" />
      {
        transactions.map((transaction, idx) => {

          const amount = currency === "BTC"
            ? satToBtc(transaction.amount).toFixed(8) // Show up to 8 decimal places for BTC
            : transaction.amount;

          return (
            <ListItem
              key={idx}
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
                <Paragraph size="$3">{new Date(transaction.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}</Paragraph>
              </YStack>
              <XStack jc="flex-end" ai="center" gap="$1.5">
                <ListItem.Text fontSize={18} textAlign="right" >
                  {amount + " "}
                </ListItem.Text>
                {currency === "SAT" ?
                  <Paragraph>{' '}SAT</Paragraph> :
                  <Bitcoin />
                }
              </XStack>
            </ListItem>
          )
        }
        )}
    </Stack >
  )
}