import { SendMoney } from "app/features/sendorrecive/SendMoney"
import { Stack } from "tamagui"


export default function Page() {

  return (
    <Stack alignSelf="center" width="50%" >
      <SendMoney />
    </Stack>
  )
}