import { Button, Sheet, Popover, XStack, YStack } from "@my/ui"
import { Send } from "@tamagui/lucide-icons"
import { ReciveArrow, SendArrow } from "../transactions/TransactionItem"
import { useState } from "react"
import { useRouter } from "solito/router"



export const SendReciveSheet = ({ buttonStyle, ...props }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  function navigateToRecive() {
    router.push("/recive")
    setOpen(false)
  }

  function navigateToSend() {
    router.push("/send")
    setOpen(false)
  }

  return (
    <>
      <Button
        onPress={() => setOpen(true)}
        icon={Send}
        style={{ ...buttonStyle }}
        size="$6"
        circular
      />
      <Sheet
        modal
        open={open}
        onOpenChange={(isOpen) => setOpen(isOpen)}
        dismissOnSnapToBottom
        snapPointsMode="fit"
        {...props}
      >
        <Sheet.Overlay
          animation="slow"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle />
        <Sheet.Frame
          p="$5"
          ai="center"
        >
          <YStack ai="center" width="100%" gap="$3">
            <XStack ai="center">
              <Button
                onPress={() => navigateToRecive()}
                size="$6"
                width={250}
                chromeless
                bordered
              >
                Recive Money
                <ReciveArrow />
              </Button>
            </XStack>

            <XStack ai="center">
              <Button
                size="$6"
                onPress={() => navigateToSend()}
                width={250}
                chromeless
                bordered
              >
                Send Money
                <SendArrow />
              </Button>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}