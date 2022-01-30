import {Heading, Text, useColorModeValue} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";
import Paragraph from "../../_shared/paragraph";
import Section from "../../_shared/section";

const Like = () => {
  return (
    <Section delay={0.3}>
      <Heading as={'h3'} variant={'section-title'}>
        I like
      </Heading>
      <ContentWrapper>
        <Text color={useColorModeValue('cyanDefault', 'cyanLight')} mr={2}>#</Text>
        <Paragraph>Development, Tattoo, Music, Sport</Paragraph>
      </ContentWrapper>
    </Section>
  )
}

export default Like
