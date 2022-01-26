import Head from 'next/head'
import {Box, Container, Text, useColorModeValue} from '@chakra-ui/react'
import NavBar from "./navBar";
import NoSsr from './no-ssr';
import ThreeDModel from "../ThreeJs/3DModel";

const ScreenWrapper = ({children, router}) => {
  return (
    <Box as={'main'} pb={8}>
      <Head>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
        <title>Roman-DEV Portfolio</title>
      </Head>
      <NavBar path={router.asPath}/>
      <Container maxW={'container.md'} pt={14}>
        <NoSsr>
          <ThreeDModel />
        </NoSsr>
        {children}
        <Box align={'right'} paddingTop={3} zIndex={1}>
          <Text color={useColorModeValue('cyan.600', 'orange.300')} fontSize={12} fontWeight={300}>&#169; Roman Havrilchuk</Text>
        </Box>
      </Container>
    </Box>
  )
}

export default ScreenWrapper
//Main
