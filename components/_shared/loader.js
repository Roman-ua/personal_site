import {Ball, Content, LoaderWrapper, PlayerOne, PlayerTwo} from "./loaderStyles";

const Loader = () => {
  return (
   <LoaderWrapper>
     <Content>
       <PlayerOne />
       <PlayerTwo />
       <Ball />
     </Content>
   </LoaderWrapper>
  )
}

export default Loader
