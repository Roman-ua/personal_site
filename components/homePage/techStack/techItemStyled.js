import styled from "@emotion/styled";
import {Box} from "@chakra-ui/react";

export const TechItemStyled = styled(Box) `
  background-color: #64ffda;
  padding: 15px;
  min-width: 100px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  margin: 20px 2px;
  cursor: pointer;
  transition: all .5s;
  &:hover {
    box-shadow: #64ffda 0 0 25px 0;
    .title {
      top: 5px;
      left: 5px;
      transition: all .5s;
    }
    .abr {
      opacity: 1;
      transition: all .5s;
    }
  }
`
