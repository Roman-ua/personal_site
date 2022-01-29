import ContactsItemWrapper from "../contacts/contactsItemWrapper";
import {Box, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import LinkSvg from "../../public/svg/link";
import GitSvg from "../../public/svg/git";
import TelegramSvg from "../../public/svg/telegram";

const SocialMedia = () => {
  const [isMobile] = useMediaQuery("(max-width: 700px)")
  return (
    <Box
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      display={isMobile ? 'none' : 'flex'}
      position={'fixed'}
      left={20}
      bottom={0}>
      <ContactsItemWrapper route={'https://www.linkedin.com/in/roman-gavrilchuk-321791210/'}>
        <LinkSvg />
      </ContactsItemWrapper>
      <ContactsItemWrapper route={'https://github.com/Roman-ua'}>
        <GitSvg />
      </ContactsItemWrapper>
      <ContactsItemWrapper route={'https://t.me/Yep_Roman'}>
        <TelegramSvg />
      </ContactsItemWrapper>
      <Box
        width={'1px'}
        height={'100px'}
        mt={3}
        backgroundColor={useColorModeValue('black', '#64ffda')}
      />
    </Box>
  )
}

export default SocialMedia
