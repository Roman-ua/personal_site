import {Box, Heading, Image, Text, useColorModeValue} from "@chakra-ui/react";

const MainInformation = () => {
  return (
    <Box display={{md: 'flex'}} marginY={10} alignItems={'start'}>
      <Box flexGrow={1}>
        <Heading as={'h2'} variant={'page-title'}>
          Havrilchuk Roman
        </Heading>
        <Box display={{md: 'flex'}}>
          <Text mr={2}>Digital Craftsman</Text>
          <Text color={'gray.500'}>#Creative Developer</Text>
        </Box>
      </Box>
      <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align={'center'}>
        <Image
          borderColor={useColorModeValue('cyan.500', 'orange.300')}
          borderWidth={2}
          borderStyle={'solid'}
          maxWidth={'100px'}
          display={'inline-block'}
          borderRadius={'full'}
          src={'/images/avatar-second.jpg'}
          alt={'profile avatar'}/>
      </Box>
    </Box>
  )
}

export default MainInformation
