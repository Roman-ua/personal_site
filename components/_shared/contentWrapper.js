import {Box, Text, useColorModeValue} from "@chakra-ui/react";


const ContentWrapper = ({children, techStack}) => {
  return (
    <Box
      borderRadius={'md'}
      bg={useColorModeValue('bgItemLight', 'bgItemDark')}
      paddingY={3}
      paddingX={5}
      mb={1}
      align={'start'}
      color={useColorModeValue('textColorLight', 'textColorDark')}
      display={techStack ? {md: 'flex'} : 'flex'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
    >
      {children}
    </Box>
  )
}

export default ContentWrapper;
