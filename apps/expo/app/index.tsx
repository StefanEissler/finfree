import { Button, H1, H3, Paragraph, Text, YStack } from "@my/ui";
import { Redirect, Stack, useRouter } from "expo-router";


export default function Page() {
  const router = useRouter()
  // return (
  //   <YStack f={1} jc='center' ai='center'>
  //     <Stack.Screen options={{ title: 'Welcome' }} />
  //     <YStack p='$3' ai='center' backgroundColor='$backgroundFocus' m='$3' borderRadius={12} gap='$3'>
  //       <H3>
  //         Welcome to FINFREE!
  //       </H3>
  //       <Paragraph textAlign="center">
  //         FINFREEs mission is to showcase a finance app in a Bitcoin Standard, when one Satoshi is equal in worth to a Cent today.
  //       </Paragraph>
  //       <Button onPress={() => router.push('/home')}>
  //         <Text fontWeight='bold'>Enter the DEMO-App</Text>
  //       </Button>
  //     </YStack>
  //   </YStack>
  // )
  return <Redirect href='/home' />
}