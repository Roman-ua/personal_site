import {Container} from '@chakra-ui/react';
import MainInformation from '../components/homePage/mainInformation/mainInformation'
import Work from "../components/homePage/work/work";
import Bio from "../components/homePage/BIO/bio";
import Like from "../components/homePage/ILike/like";
import TechStack from "../components/homePage/techStack/techStack";
import Copyright from "../components/_shared/copyright";
import PrintedText from "../components/homePage/printedText/PrintedText";
import Languages from "../components/homePage/languages/languages";
import Greetings from "../components/homePage/greetingsText/greetings";

const HomePage = () => {
  return (
    <Container maxW={'container.md'} position={'relative'}>
      <PrintedText />
      <Greetings />
      <MainInformation />
      <TechStack />
      <Work />
      <Bio />
      <Languages />
      <Like />
      <Copyright />
    </Container>
  )
}
export default HomePage

