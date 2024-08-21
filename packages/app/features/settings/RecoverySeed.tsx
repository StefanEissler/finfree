
import { Button, H3, Paragraph, Spacer, Stack, Text, XStack, ScrollView } from "@my/ui"
import { Eye, EyeOff } from "@tamagui/lucide-icons"
import { useState } from "react"
import { FlatList, StyleSheet } from "react-native"


export const RecoverySeed = () => {
  const [isBlurred, setIsBlurred] = useState(true)

  return (
    <Stack p={10} gap="$2" f={1} backgroundColor="$background">
      <H3>Your Bitcoin Wallet Recovery Seed:</H3>
      <Paragraph>Please don´t show this to anyone and keep it secure!</Paragraph>
      <Spacer />
      <Button iconAfter={isBlurred ? Eye : EyeOff} alignSelf="center" onPress={() => setIsBlurred(!isBlurred)}>Reveal Recovery Seed</Button>
      <Stack f={1}>
        <FlatList
          data={[
            { key: "toe" },
            { key: "miss" },
            { key: "arrive" },
            { key: "bonus" },
            { key: "gallery" },
            { key: "fan" },
            { key: "little" },
            { key: "whink" },
            { key: "any" },
            { key: "knee" },
            { key: "exhaust" },
            { key: "below" },
            { key: "globe" },
            { key: "thank" },
            { key: "clump" },
            { key: "connect" },
            { key: "second" },
            { key: "cousin" },
            { key: "vibrant" },
            { key: "hockey" },
            { key: "wave" },
            { key: "fragile" },
            { key: "chricket" },
            { key: "eye" },
            { key: "bicycle" },
          ]}
          numColumns={2}
          initialNumToRender={25}
          renderItem={({ item, index }) => {
            return (
              <XStack width={100} m={7} mr={50}>
                <Text fontSize={18}>{index + 1 + ". "}</Text>
                {!isBlurred ?
                  <Paragraph fontSize={20} >{item.key}</Paragraph> :
                  <Paragraph>XXX</Paragraph>
                }
              </XStack>
            )
          }}
        />
      </Stack>
    </Stack>
  )
}

const styles = StyleSheet.create({
  blurred: {
    opacity: 0.5,
  }
})