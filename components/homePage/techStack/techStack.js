import {Heading} from "@chakra-ui/react";
import ContentWrapper from "../../_shared/contentWrapper";
import Section from "../../_shared/section";
import {TechAttribute} from "./techStyled";

const TechStack = () => {
  return (
    <Section delay={0.1}>
      <Heading as={'h3'} variant={'section-title'}>
        My tech_stack
      </Heading>
      <ContentWrapper>
        <TechAttribute>Coding:</TechAttribute> TypeScript / JS / HTML5 / CSS3 / SCSS
      </ContentWrapper>
      <ContentWrapper>
        <TechAttribute>Frameworks & libraries:</TechAttribute> React / ReactNative / Next / Redux / ChakraUI / ThreeJS
      </ContentWrapper>
      <ContentWrapper>
        <TechAttribute>API:</TechAttribute> REST / GraphQL
      </ContentWrapper>
      <ContentWrapper>
        <TechAttribute>Databases:</TechAttribute> Firebase
      </ContentWrapper>
      <ContentWrapper>
        <TechAttribute>Task Management:</TechAttribute> Git / GitLab / BitBucket / Jira / Trello
      </ContentWrapper>
    </Section>
)
}

export default TechStack
