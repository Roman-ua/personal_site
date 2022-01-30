import {Text, useColorModeValue} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";

const Greetings = () => {
  return (
    <ContentWrapper>
      <Text display={'inline-block'} color={useColorModeValue('cyanDefault', 'cyanLight')} mr={2}>#</Text>
      <Text>Hello, I'm a front-end developer based in Ukraine!</Text>
    </ContentWrapper>
  )
}

export default Greetings
