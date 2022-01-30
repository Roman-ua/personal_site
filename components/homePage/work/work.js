import {Box, Button, Heading, Image, Link, Text, useColorModeValue} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";
import Paragraph from "../../_shared/paragraph";
import Section from "../../_shared/section";

const Work = () => {
  return(
    <Section delay={0.1}>
      <Heading as={'h3'} variant={'section-title'}>
        Work
      </Heading>
      <ContentWrapper>
        <Text color={useColorModeValue('cyanDefault', 'cyanLight')} mr={2}>#</Text>
        <Paragraph>Roman is a front-end developer based in Ukraine with a passion
          for building digital services/stuff. He has experience in developing many projects.
          And he will gladly help you in the realization of your plans.
          But pay attention now he works in the company Lunka.
        </Paragraph>
      </ContentWrapper>
      <Box align={'center'} my={6}>
        <Image src={'/images/Code.png'} w={[300, 400, 500]}/>
      </Box>
    </Section>
  )
}

export default Work
