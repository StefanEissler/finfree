import { Avatar, AvatarFallback, Card, H3, Paragraph, XStack, YStack } from "@my/ui"
import { useUser } from "@supabase/auth-helpers-react";
import { User } from "@tamagui/lucide-icons";
import { useRouter } from "solito/router";

export const UserHeader = () => {
  const user = useUser()
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
    <Card>
      <XStack>
        <Avatar m="$3" padding="$5" circular>
          <Avatar.Image
          />
          <Avatar.Fallback backgroundColor="blue" />
        </Avatar>
        <YStack>
          <H3>{user.user_metadata.username}</H3>
          <Paragraph>{user.email}</Paragraph>
        </YStack>
      </XStack>
    </Card>
  )
}