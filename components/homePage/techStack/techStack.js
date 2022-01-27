import {Heading} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";
import Section from "../../_shared/section";
import {TechAttribute} from "./techStyled";
import {tech_stack_data} from "../../../constants/default_data";

const renderItemStack = () => {
  return tech_stack_data.map((item)=>{
    return (
      <ContentWrapper key={item.title}>
        <TechAttribute>{item.title}</TechAttribute> {item.stack}
      </ContentWrapper>
    )
  })
}
const TechStack = () => {
  return (
    <Section delay={0.1}>
      <Heading as={'h3'} variant={'section-title'}>
        My tech_stack
      </Heading>
      {renderItemStack()}
    </Section>
)
}

export default TechStack
