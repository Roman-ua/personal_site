import NextLink from "next/link";
import {Button, useColorModeValue, ButtonGroup, Image, Container} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Contacts = () => {
  return (
    <Container>
      <ButtonGroup>
        <NextLink href={'/'}>
          <Image maxW={'60px'} src={useColorModeValue('/icons/white/white-github.png', '/icons/dark/dark-github.png')}/>
        </NextLink>
        <NextLink href={'/'}>
          <Image maxW={'60px'} src={useColorModeValue('/icons/white/white-linkedin.png', '/icons/dark/dark-linkedin.png')}/>
        </NextLink>
        <NextLink href={'/'}>
          <Image maxW={'60px'} src={useColorModeValue('/icons/white/white-telegram.png', '/icons/dark/dark-telegram.png')}/>
        </NextLink>
        <NextLink href={'/'}>
          <Image maxW={'60px'} src={useColorModeValue('/icons/white/white-google.png', '/icons/dark/dark-google.png')}/>
        </NextLink>
      </ButtonGroup>
    </Container>

  )
}

export default Contacts
