import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./themeToggleButton";

const LinkItem = ({href, path, children}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? 'cyan' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  )
}


const NavBar = (props) => {
  const {path} = props;
  return (
    <Box
      position={'fixed'}
      as={'nav'}
      w={'100%'}
      bg={useColorModeValue('navbarLight', 'navBarDark')}
      css={{ backdropFilter: 'blur(5px)' }}
      zIndex={3}
      {...props}
    >
      <Container
        display={'flex'}
        p={2}
        maxW={'container.xl'}
        wrap={'wrap'}
        align={'center'}
        justify={'space-between'}>
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{base: 'column', md: 'row'}}
          display={{base: 'none', md: 'flex'}}
          width={{base: 'full', md: 'auto'}}
          alignItems={'center'}
          flexGrow={1}
          mt={{base: 4, nmd: 0}}
        >
          <LinkItem href={'/blog'} path={path}>
            01. Blog
          </LinkItem>
        </Stack>
        <Box flex={1} align={'right'}>
          <ThemeToggleButton />
          <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant={'outline'} aria-label={'Options'} />
              <MenuList>
                <NextLink href={'/blog'} passHref>
                  <MenuItem as={Link}>Blog</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
