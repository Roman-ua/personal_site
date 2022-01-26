import {Container, Text} from '@chakra-ui/react';
import ContentWrapper from "../components/_shared/contentWrapper";
import MainInformation from '../components/homePage/mainInformation/mainInformation'
import Work from "../components/homePage/work/work";
import Bio from "../components/homePage/BIO/bio";
import Like from "../components/homePage/ILike/like";
import TechStack from "../components/homePage/techStack/techStack";

const HomePage = ({Component, pageProps, router}) => {
  return (
    <Container>
      <ContentWrapper>
        <Text>Hello, I'm a front-end developer based in Ukraine!</Text>
      </ContentWrapper>
      <MainInformation />
      <TechStack />
      <Work />
      <Bio />
      <Like />
    </Container>
  )
}
export default HomePage
