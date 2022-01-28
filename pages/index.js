import {Container, Text} from '@chakra-ui/react';
import ContentWrapper from "../components/_shared/contentWrapper";
import MainInformation from '../components/homePage/mainInformation/mainInformation'
import Work from "../components/homePage/work/work";
import Bio from "../components/homePage/BIO/bio";
import Like from "../components/homePage/ILike/like";
import TechStack from "../components/homePage/techStack/techStack";
import Copyright from "../components/_shared/copyright";
import SocialMedia from "../components/_shared/socialMedia";
import PrintedText from "../components/homePage/printedText/PrintedText";
import Languages from "../components/homePage/languages/languages";

const HomePage = ({Component, pageProps, router}) => {
  return (
    <Container maxW={'container.md'} position={'relative'}>
      <PrintedText />
      <ContentWrapper>
        <Text>Hello, I'm a front-end developer based in Ukraine!</Text>
      </ContentWrapper>
      <MainInformation />
      <TechStack />
      <Work />
      <Bio />
      <Languages />
      <Like />
      <Copyright />
      <SocialMedia />
    </Container>
  )
}
export default HomePage
// #0a192f dark
// #8892b0 gray
// #64ffda button
