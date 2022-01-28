import {Box, Text, useColorModeValue} from "@chakra-ui/react";

const Copyright = () => {
  return (
    <Box align={'center'} padding={3} zIndex={1}>
      <Text color={useColorModeValue('cyan.600', '#64ffda')} fontSize={12} fontWeight={300}>&#169; Roman Havrilchuk</Text>
    </Box>
  )
}

export default Copyright
