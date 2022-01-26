import {Heading, Image, Text, useColorModeValue} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";
import {BioSection, BioYear} from "./bioStyled";
import Section from "../../_shared/section";

const Bio = () => {
  return (
    <Section delay={0.2}>
      <Heading as={'h3'} variant={'section-title'}>
        BIO
      </Heading>
      <ContentWrapper>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Zaporozhye, Ukraine
        </BioSection>
      </ContentWrapper>
      <ContentWrapper>
        <BioSection>
          <BioYear>2017</BioYear>
          Complete, Dnipro National University,
          Faculty of Applied Math, masters degree
        </BioSection>
      </ContentWrapper>
      <ContentWrapper>
        <BioSection>
          <BioYear>2020</BioYear>
          Works as a freelance
        </BioSection>
      </ContentWrapper>
      <ContentWrapper>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          I work as a front-end developer at Lunka company
        </BioSection>
      </ContentWrapper>
    </Section>
  )
}

export default Bio
