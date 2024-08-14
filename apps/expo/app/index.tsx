import { H1, Button } from "@my/ui";
import { Redirect, Slot, useRouter } from "expo-router";
import { Home } from '@tamagui/lucide-icons'



export default function Page() {
  const router = useRouter()
  return (
    <Redirect href="/home" />
  )
}