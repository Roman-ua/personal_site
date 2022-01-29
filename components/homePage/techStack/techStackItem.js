import {Box, Text, useColorModeValue} from "@chakra-ui/react";
import {TechItemStyled} from "./techItemStyled";

const TechStackItem = ({abr, title}) => {
  return (
    <TechItemStyled>
      <Text align={'center'} color={'black'} fontWeight={'extrabold'}>{title}</Text>
      <Box
        className={'title'}
        borderRadius={5}
        borderWidth={1}
        borderColor={'#64ffda'}
        position={'absolute'}
        w={'100%'}
        h={'100%'}
        top={2}
        left={2}/>
    </TechItemStyled>
  )
}

export default TechStackItem
