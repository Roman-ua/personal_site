import styled from "@emotion/styled";


export const ItemBox = styled.div`
  padding: 30px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  .back_ground {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all .5s;
    border-radius: 20px;
    z-index: -1;
  }
  .mail {
    box-shadow: red 0 0 25px 0;
  }
  .tg {
    box-shadow: deepskyblue 0 0 25px 0;
  }
  .linkDin {
    box-shadow: royalblue 0 0 25px 0;
  }
  .git {
    box-shadow: purple 0 0 25px 0;
  }
  &:hover {
    transition: all .5s;
    transform: scale(1.1);
  }
  &:hover .back_ground {
    opacity: 1;
    transition: all .5s;
  }
`
