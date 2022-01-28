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
        <link rel="shortcut icon" type="image/jpg" href="/public/icons/favicon.png"/>
      </Head>
      <NavBar path={router.asPath}/>
      <Container maxW={'container.xl'} pt={14}>
        {children}
      </Container>
      <Typed
        strings={['React', '']}
        typeSpeed={70}
        backSpeed={30}
        showCursor={false}
        style={{ color: 'gray', position: 'absolute', top: '50px', fontSize: '100px', fontWeight: 'bolder', opacity: 0.1}}
      />
      <Typed
        strings={['JS', '']}
        typeSpeed={70}
        backSpeed={30}
        showCursor={false}
        startDelay={2000}
        style={{ color: 'gray', position: 'absolute', top: '450px', right: '20px', fontSize: '100px', fontWeight: 'bolder', opacity: 0.1}}
      />
    </Box>
  )
}

export default ScreenWrapper
