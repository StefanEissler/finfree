import { H1 } from "@my/ui";
import { Link } from "expo-router";


export default function Page() {
  return (
    <>
      <H1>Welcome</H1>
      <Link href="/home">To the Tabs</Link>
    </>
  )
}