import {Heading, Text, useColorModeValue} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";
import Section from "../../_shared/section";
import {Language} from "./languagesStyled";
import {language_data} from "../../../constants/default_data";

const renderItemStack = () => {
  return language_data.map((item)=>{
    return (
      <ContentWrapper key={item.title}>
        <Text color={useColorModeValue('cyanDefault', 'cyanLight')} mr={2}>#</Text>
        <Language>{item.title}</Language> {item.stack}
      </ContentWrapper>
    )
  })
}
const Languages = () => {
  return (
    <Section delay={0.1}>
      <Heading as={'h3'} variant={'section-title'}>
        Languages
      </Heading>
      {renderItemStack()}
    </Section>
)
}

export default Languages
