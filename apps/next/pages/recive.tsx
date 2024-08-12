import { ReciveMoney } from "app/features/sendorrecive/ReciveMoney"
import { Stack } from "tamagui"


export default function Page() {

  return (
    <Stack alignSelf="center" width="50%" >
      <ReciveMoney />
    </Stack>
  )
}