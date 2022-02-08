import { ChakraProvider } from "@chakra-ui/react";
import ScreenWrapper from '../components/_shared/screenWrapper';
import theme from '../components/theme/theme'
import Fonts from "../components/theme/fonts";
import  {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import Loader from "../components/_shared/loader";

const App = ({Component, pageProps, router}) => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>setLoading(false), 4000)
  },[])
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {loading ? <Loader/> :
        <ScreenWrapper router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ScreenWrapper>}
    </ChakraProvider>
  )
}

export default App
