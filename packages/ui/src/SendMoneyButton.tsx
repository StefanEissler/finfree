import { Send } from '@tamagui/lucide-icons'
import { Button, styled } from 'tamagui'

export const SendMoneyButton = styled(Button, {
  name: 'SendMoneyButton',
  icon: Send,

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
})
