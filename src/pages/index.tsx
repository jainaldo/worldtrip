import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Flex } from "@chakra-ui/react";


export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
    </Flex>
  )
}
