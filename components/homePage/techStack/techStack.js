import {Box, Heading} from "@chakra-ui/react";
import Section from "../../_shared/section";
import {useState} from "react";
import {renderTechItem} from "../../../utils/utilsCommon";
import RangeSlider from "../../_shared/rangeSlider";
import ContentWrapper from "../../_shared/contentWrapper";

const TechStack = () => {
  const [sliderValue, setSliderValue] = useState(0)
  return (
    <Section delay={0.1}>
      <Box display={'flex'} flexDir={'column'}>
        <RangeSlider setSliderValue={setSliderValue} />
        <Heading as={'h3'} variant={'section-title'}>
          My tech_stack
        </Heading>
        <ContentWrapper techStack>
          {renderTechItem(sliderValue)}
        </ContentWrapper>
      </Box>
    </Section>
)
}

export default TechStack
