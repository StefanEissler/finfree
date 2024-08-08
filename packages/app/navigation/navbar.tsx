
import { Button, Paragraph, Stack, SwitchThemeButton, XStack, YStack } from "@my/ui";
import { Menu, X } from "@tamagui/lucide-icons";
import { useRef } from "react";
import { Link } from "solito/link";

export const SideNavBar = () => {
  const navBarRef = useRef<HTMLAnchorElement>(null);

  const openNav = () => {
    if (navBarRef.current)
      navBarRef.current.style.width = "300px";
  };

  const closeNav = () => {
    if (navBarRef.current)
      navBarRef.current.style.width = "0";
  };


  return (
    <Stack>
      <XStack padding="$2" gap="$3">
        <Button size="$4" icon={Menu} alignSelf="flex-start" onPress={() => openNav()} />
        <SwitchThemeButton />
      </XStack>
      {/* Side Nav Bar */}
      <YStack
        backgroundColor="$backgroundFocus"
        jc="center"
        ref={navBarRef}
        style={{
          height: "100%",
          position: "fixed",
          zIndex: 1000,
          width: 0,
          top: 0,
          left: 0,
          overflowX: "hidden",
          transition: "0.5s",
          paddingTop: "60px",
        }}
      >
        <Button
          icon={X}
          onPress={closeNav}
          chromeless
          alignSelf="flex-end"
          justifyContent="center"
        />
        <Stack
          width={250}
          ai="center"
        >
          <Link href="/">
            <Paragraph
              onPress={closeNav}
              hoverStyle={{
                textDecorationLine: "underline"
              }}
            >
              Home
            </Paragraph>
          </Link>
          <Link href="/settings">
            <Paragraph
              onPress={closeNav}
              hoverStyle={{
                textDecorationLine: "underline"
              }}
            >
              Settings
            </Paragraph>
          </Link>
        </Stack>
      </YStack>
    </Stack>
  );
}