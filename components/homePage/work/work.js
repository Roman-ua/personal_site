import {Box, Button, Heading, Link, useColorModeValue} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";
import Paragraph from "../../_shared/paragraph";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import Section from "../../_shared/section";

const Work = () => {
  return(
    <Section delay={0.1}>
      <Heading as={'h3'} variant={'section-title'}>
        Work
      </Heading>
      <ContentWrapper>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut, beatae cumque dolore eius,
          nam nemo nostrum nulla optio, quas quod recusandae reiciendis tempora tenetur velit? Deserunt quia quibusdam
          quos! A beatae eaque eos eveniet explicabo ipsam, magni minus
          nulla numquam odio officia praesentium, ratione reprehenderit sit suscipit?
          Debitis esse fugit harum iste minima recusandae reiciendis totam unde vitae voluptatum?
          <NextLink href={'/'}>
            <Link ml={3} color={useColorModeValue('cyan.600', '#64ffda')}>Link</Link>
          </NextLink>
        </Paragraph>
      </ContentWrapper>
      <Box align={'center'} my={10}>
        <NextLink href={'/'}>
          <Button
            borderColor={useColorModeValue('cyan.600', '#64ffda')}
            padding={6}
            color={useColorModeValue('cyan.600', '#64ffda')}
            variant={'outline'}
            rightIcon={<ChevronRightIcon/>}>
            Connect with Me
          </Button>
        </NextLink>
      </Box>
    </Section>
  )
}

export default Work
