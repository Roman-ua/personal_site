import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import NavBar from "./navBar";
import Typed from "react-typed";

const ScreenWrapper = ({children, router}) => {
  return (
    <Box as={'main'} position={'relative'}>
      <Head>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
        <title>Havrilchuk Roman</title>
        <link rel="shortcut icon" type="image/png" href="/public/icons/favicon.png"/>
      </Head>
      <NavBar path={router.asPath}/>
      <Container maxW={'container.xl'} pt={14} position={'relative'} zIndex={2}>
        {children}
      </Container>
      <Typed
        strings={['JS', 'TypeScript', 'React.js', 'ReactNative', 'Next.js', '']}
        typeSpeed={55}
        backSpeed={25}
        startDelay={2000}
        showCursor={false}
        style={{
          color: 'gray',
          position: 'absolute',
          top: '90px',
          fontSize: '70px',
          fontWeight: 'bolder',
          opacity: 0.1}}
      />
    </Box>
  )
}

export default ScreenWrapper
