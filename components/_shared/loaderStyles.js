import styled from "@emotion/styled";
import {Box} from "@chakra-ui/react";
export const LoaderWrapper = styled(Box)`
  width: 100%;
  height: 90vh;
  position: relative;
`

export const Content = styled.div `
  position: absolute;
  top: 45%;
  left: 57.5%;
  transform: translate(-50%, -50%);
  display: block;
`
export const PlayerOne = styled.div `
  height:40px;
  width:3px;
  background-color:white;
  position:relative;
  left:-180px;
  animation: movePaddleOne 4s infinite;

  @keyframes movePaddleOne{
    0%, 100%{
      transform:translate(0px, 100px);
    }
    25%{
      transform:translate(0px, 0px);
    }
    50%{
      transform:translate(0px, 0px);
    }
    75%{
      transform:translate(0px, 100px);
    }
  }
`
export const PlayerTwo = styled.div `
  height:40px;
  width:3px;
  background-color:white;
  position:relative;
  left:20px;
  animation: movePaddleTwo 4s infinite;

  @keyframes movePaddleTwo{
    0%, 100%{
      transform:translate(0px,-50px);
    }
    25%{
      transform:translate(0px,10px);
    }
    50%{
      transform:translate(0px,0px);
    }
    75%{
      transform:translate(0px,50px);
    }
  }
`
export const Ball = styled.div `
  position:relative;
  height:5px;
  width:5px;
  border-radius:50%;
  background-color:white;
  animation: moveBall 4s infinite linear;

  @keyframes moveBall{
    0%, 100%{
      transform:translate(-180px, 30px);
    }
    25%{
      transform:translate(18px, -25px);
    }
    50%{
      transform:translate(-180px, -55px);
    }
    75%{
      transform:translate(18px, 15px);
    }
  }
`
