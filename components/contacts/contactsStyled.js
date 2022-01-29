import styled from "@emotion/styled";


export const ItemBox = styled.div`
  padding: 6px;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  &:hover {
    transition: all .3s;
    -moz-transform: translate(1px, -4px);
    -webkit-transform: translate(1px, -4px);
    -o-transform: translate(1px, -4px);
    -ms-transform: translate(1px, -4px);
  }
`
