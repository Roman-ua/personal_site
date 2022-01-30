import {Box, useColorModeValue} from "@chakra-ui/react";
import Typed from 'react-typed';

const PrintedText = () => {
  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'} mt={30}
      backgroundColor={'black'}
      padding={30}
      borderRadius={8}
      mb={10}
      position={'relative'}
    >
      <Box backgroundColor={useColorModeValue('bgItemDark', 'bgItemLight')} position={'absolute'} top={0} left={0} right={0} borderTopRadius={7} display={'flex'} padding={2}>
        <Box w={3} h={3} borderRadius={30} backgroundColor={'buttonClose'}/>
        <Box w={3} h={3} borderRadius={30} backgroundColor={'buttonHide'} marginX={2}/>
        <Box w={3} h={3} borderRadius={30} backgroundColor={'buttonCollapse'}/>
      </Box>
      <Box display={'flex'} pt={'20px'}>
        <Typed
          strings={['const']}
          typeSpeed={50}
          showCursor={false}
          style={{marginRight: '5px', color: 'darkorange'}}
        />
        <Typed
          strings={['best_tech']}
          typeSpeed={50}
          showCursor={false}
          style={{marginRight: '5px', fontWeight: 'bold', color: 'cyan'}}
          startDelay={500}
        />
        <Typed
          strings={['=']}
          typeSpeed={50}
          showCursor={false}
          style={{marginRight: '5px', color: 'white'}}
          startDelay={1200}
        />
        <Typed
          strings={['JS', 'TypeScript', 'React.js', 'ReactNative', 'Next.js', 'Front-End']}
          typeSpeed={50}
          backSpeed={30}
          showCursor={true}
          startDelay={2000}
          style={{color: 'white'}}
        />
      </Box>
    </Box>
  )
}

export default PrintedText
