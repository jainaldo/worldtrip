import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" width="100%" height="100px" align="center" justify="center" p="5">
      <Image src="./images/Logo.svg" alt="Logo worldtrip" />
    </Flex>
  )
}