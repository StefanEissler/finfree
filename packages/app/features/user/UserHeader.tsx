import { Avatar, AvatarFallback, Card, H3, Paragraph, Text, XStack, YStack } from "@my/ui"
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "solito/router";


export const exampleUser = {
  name: "Stefan Eißler",
  picture: "https://mbddwyllcycsqyuinbvq.supabase.co/storage/v1/object/public/avatars/Stefan.png",
  email: "stefaneissler@web.de"
}

export const UserHeader = () => {
  const user = exampleUser//useUser()
  const router = useRouter()

  const handleCardClick = () => {
    router.push("/user/stefan")
  }

  if (!user) {
    return (
      <Card p="$4" gap="$5" onPress={() => handleCardClick()} hoverTheme>
        <XStack gap="$4">
          <Avatar m="$3" padding="$5" circular>
            <Avatar.Image
            />
            <Avatar.Fallback backgroundColor="blue" />
          </Avatar>
          <YStack>
            <H3>User not found</H3>
            <Paragraph>No Email to show</Paragraph>
          </YStack>
        </XStack>
      </Card>
    )
  }

  return (
    <Card onPress={() => handleCardClick()} bordered>
      <XStack alignItems="center">
        <Avatar
          m="$4"
          padding="$10"
          size="$7"
          circular
        >
          <Avatar.Image
            src={user.picture}
          />
          <Avatar.Fallback backgroundColor="blue" />
        </Avatar>
        <YStack>
          <H3>{user.name}</H3>
          <Text>{user.email}</Text>
        </YStack>
      </XStack>
    </Card>
  )
}