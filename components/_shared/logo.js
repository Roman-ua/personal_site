import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from "@chakra-ui/react";
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 30px;
  padding: 10px;
  img {
    transition: all .5s;
  }
  &:hover img {
    transition: all .5s;
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/cpu${useColorModeValue('', '-dark')}.svg`
  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={30} height={30} alt={'logo'}/>
          <Text fontWeight={'bold'}>Havrilchuk Roman</Text>
        </LogoBox>
      </a>
    </Link>
  );
}

export default Logo
