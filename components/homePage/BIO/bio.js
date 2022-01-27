import {Heading, Image, Text, useColorModeValue} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";
import {BioSection, BioYear} from "./bioStyled";
import Section from "../../_shared/section";
import {bio_data} from "../../../constants/default_data";

const renderItemBio = () => {
  return bio_data.map((item) => {
    return(
      <ContentWrapper key={item.year}>
        <BioSection>
          <BioYear>{item.year}</BioYear>
          {item.data}
        </BioSection>
      </ContentWrapper>
    )
  })
}

const Bio = () => {
  return (
    <Section delay={0.2}>
      <Heading as={'h3'} variant={'section-title'}>
        BIO
      </Heading>
      {renderItemBio()}
    </Section>
  )
}

export default Bio
