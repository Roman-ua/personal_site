import {Box, Text, useColorModeValue} from "@chakra-ui/react";
import SocialMedia from "./socialMedia";

const Copyright = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={3} zIndex={1}>
      <SocialMedia />
      <Text
        color={useColorModeValue('cyan.600', '#64ffda')}
        fontSize={12}
        fontWeight={300}>&#169; Havrilchuk Roman</Text>
    </Box>
  )
}

export default Copyright
