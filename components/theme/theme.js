import {extendTheme} from "@chakra-ui/react";
import {mode} from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#eee9e2', '#0a192f')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS 1 Code'",
}

const colors = {
  // glassTeal: '#88ccca',
  dark: '#0a192f',
  gray: '#8892b0',
  navBarDark: '#0a192f80',
  navBarLight: '#eee9e240',
  cyanLight: '#64ffda',
  cyanDefault: '#00A3C4',
  bgItemLight: '#F7FAFC',//gray.50
  bgItemDark: '#2D3748',//gray.700
  textColorDark: '#A0AEC0',//gray.500
  textColorLight: '#718096',//gray.400
  buttonClose: '#F56565', //red.400,
  buttonHide: '#ECC94B', //yellow.400
  buttonCollapse: '#48BB78'//green.400
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config, styles, components, colors, fonts
})

export default theme
