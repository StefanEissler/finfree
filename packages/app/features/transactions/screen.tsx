import { H1 } from "@my/ui"
import { createParam } from "solito"
import { useParams } from "solito/navigation"

type TransactionParam = {
  id: string
}

export const TransactionScreen = () => {
  const { id } = useParams<TransactionParam>()

  if (!id) {
    <H1>Transaction not found</H1>
  }
  return (
    <H1>{id}</H1>
  )
}