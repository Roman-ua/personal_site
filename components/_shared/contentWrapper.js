import {Box, Text, useColorModeValue} from "@chakra-ui/react";


const ContentWrapper = ({children}) => {
  return (
    <Box
      borderRadius={'md'}
      bg={useColorModeValue('whiteAlpha.900', 'gray.700')}
      paddingY={3}
      paddingX={5}
      mb={1}
      align={'start'}
      color={useColorModeValue('gray.500', 'gray.400')}
      display={{md: 'flex'}}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
    >
      {children}
    </Box>
  )
}

export default ContentWrapper;
