import {Box, Button, Heading, Image, Link, Text, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";
import Paragraph from "../../_shared/paragraph";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import Section from "../../_shared/section";
import CodingSvg from "../../../public/svg/coding";

const Work = () => {
  const [isMobile] = useMediaQuery("(max-width: 700px)")
  return(
    <Section delay={0.1}>
      <Heading as={'h3'} variant={'section-title'}>
        Work
      </Heading>
      <ContentWrapper>
        <Text color={useColorModeValue('cyan.600', '#64ffda')} mr={2}>#</Text>
        <Paragraph>Roman is a front-end developer based in Ukraine with a passion
          for building digital services/stuff. He has experience in developing many projects.
          And he will gladly help you in the realization of your plans.
          But pay attention now he works in the company Lunka.
        </Paragraph>
      </ContentWrapper>
      <Box align={'center'} my={10}>
        <Image src={'/images/Code.png'} maxW={isMobile ? 300 : 550}/>
      </Box>
    </Section>
  )
}

export default Work
