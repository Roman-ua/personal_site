import Head from 'next/head'
import {Box, Container, Text, useColorModeValue} from '@chakra-ui/react'
import NavBar from "./navBar";
import NoSsr from './no-ssr';
import ThreeDModel from "../ThreeJs/3DModel";
import Copyright from "./copyright";

const ScreenWrapper = ({children, router}) => {
  return (
    <Box as={'main'}>
      <Head>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
        <title>Havrilchuk Roman</title>
      </Head>
      <NavBar path={router.asPath}/>
      <Container maxW={'container.xl'} pt={14}>
        <NoSsr>
          <ThreeDModel />
        </NoSsr>
        {children}
        <Copyright />
      </Container>
    </Box>
  )
}

export default ScreenWrapper
//Main
