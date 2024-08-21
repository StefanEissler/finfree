import { Button, Fieldset, Form, Input, Label, Spacer, Stack, useToastController } from "@my/ui"
import { Save } from "@tamagui/lucide-icons"
import { useState } from "react"

export const UserForm = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")

  const toast = useToastController()

  const handleSubmit = () => {

    console.log(email, username)
    if (email === "" || username === "") {
      toast.show("Either Email or Username is missing")
      return
    }
    if (email === "") {
      toast.show(`Username changed to: ${username}`)
      return
    }

    if (username === "") {
      toast.show(`Username changed to: ${email}`)
      return
    }

    toast.show(`Username changed to: ${username} and Email changed to ${email}`)
    return
  }

  return (
    <Stack minWidth={300} width="90%">
      <Form onSubmit={handleSubmit} gap="$2">
        <Spacer m="$1" />
        <Fieldset horizontal>
          <Label width={100}>Email:</Label>
          <Input f={1} minWidth={250} value={email} onChangeText={setEmail} />
        </Fieldset>
        <Fieldset horizontal>
          <Label width={100}>Username:</Label>
          <Input f={1} minWidth={250} value={username} onChangeText={setUsername} />
        </Fieldset>
        <Form.Trigger asChild ai="center" alignSelf="flex-end">
          <Button iconAfter={Save}>Save</Button>
        </Form.Trigger>
      </Form>
    </Stack>
  )
}