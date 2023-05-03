import { BannerHome } from "@/components/BannerHome";
import { Header } from "@/components/Header";
import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";


import { carrosel } from "../mocks.json"
import { Carrousel } from "@/components/Carrousel";


export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <BannerHome />
      <Box w="100%" my={["16","24"]} maxWidth={1160} mx="auto">
        <SimpleGrid gap="4" minChildWidth="145px">
          <Flex direction="column" align="center" justify="center">
            <Image src="./images/cocktail.svg" width="85" height="85" alt="imagem de tarça de bebida"/>
            <Text 
              fontSize="2xl"
              fontWeight="600"
              mt="6"
              color="gray.700"
            >
              vida noturna
            </Text>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Image src="./images/surf.svg" width="85" height="85" alt="imagem de tarça de bebida"/>
            <Text 
              fontSize="2xl"
              fontWeight="600"
              mt="6"
              color="gray.700"
            >
              praia
            </Text>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Image src="./images/building.svg" width="85" height="85" alt="imagem de tarça de bebida"/>
            <Text 
              fontSize="2xl"
              fontWeight="600"
              mt="6"
              color="gray.700"
            >
              moderno
            </Text>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Image src="./images/museum.svg" width="85" height="85" alt="imagem de tarça de bebida"/>
            <Text 
              fontSize="2xl"
              fontWeight="600"
              mt="6"
              color="gray.700"
            >
              clássico
            </Text>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Image src="./images/earth.svg" width="85" height="85" alt="imagem de tarça de bebida"/>
            <Text 
              fontSize="2xl"
              fontWeight="600"
              mt="6"
              color="gray.700"
            >
              e mais...
            </Text>
          </Flex>
        </SimpleGrid>
        <Flex align="center" justify="center" direction="column" mt="20">
          <Divider borderColor="gray.700" width={"90px"} border="2"/>
          <Flex my="14" align="center" justify="center" direction="column" >
            <Text color="gray.700" fontWeight="500" fontSize="xl">Vamos nessa?</Text>
            <Text color="gray.700" fontWeight="500" fontSize="xl">Então escolha seu continente</Text>
          </Flex>
        </Flex>
        <Carrousel slides={carrosel}/>
      </Box>


      {/* <Box w="100%" my={["16","24"]} maxWidth={1160} mx="auto" height="40px">
      </Box> */}
    </Flex>
  )
}
