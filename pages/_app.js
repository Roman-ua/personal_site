import { ChakraProvider } from "@chakra-ui/react";
import ScreenWrapper from '../components/_shared/screenWrapper';
import theme from '../components/theme/theme'
import Fonts from "../components/theme/fonts";
import  {AnimatePresence, motion} from "framer-motion";

const App = ({Component, pageProps, router}) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ScreenWrapper router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ScreenWrapper>
    </ChakraProvider>
  )
}

export default App
