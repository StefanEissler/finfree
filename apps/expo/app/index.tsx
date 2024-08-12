import { H1, Button } from "@my/ui";
import { useRouter } from "expo-router";
import { Home } from '@tamagui/lucide-icons'



export default function Page() {
  const router = useRouter()
  return (
    <>
      <H1>Welcome</H1>
      <Button icon={Home} onPress={() => router.push("/home")} />
    </>
  )
}