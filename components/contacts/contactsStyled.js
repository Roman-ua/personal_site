import styled from "@emotion/styled";


export const ItemBox = styled.div`
  padding: 6px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transition: all .3s;
    -moz-transform: translate(1px, -4px);
    -webkit-transform: translate(1px, -4px);
    -o-transform: translate(1px, -4px);
    -ms-transform: translate(1px, -4px);
    .tg {
      box-shadow: deepskyblue 0 0 25px 0;
    }
    .linkDin {
      box-shadow: royalblue 0 0 25px 0;
    }
    .git {
      box-shadow: purple 0 0 25px 0;
    }
  }
`
