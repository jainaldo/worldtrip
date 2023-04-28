import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function BannerHome() {

  return (
    <Flex width="100%" height="335px" bgImage="./images/Background.svg" backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>
      <Flex width="1160px" align="center" height="368.21px" justify="space-between" mx="auto" my="0">
        <Box>
          <Text fontWeight="500" width="426px" fontSize="4xl">5 Continentes, infinitas possibilidades.</Text>
          <Text fontWeight="400" mt="5" width="524px" fontSize="xl" color="gray.300">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Box>
        <Image
          mt="24"
          src="./images/Airplane.svg" 
          alt="imagem de aviação"/>
      </Flex>
    </Flex>
  )
}