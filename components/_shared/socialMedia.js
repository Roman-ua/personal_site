import ContactsItemWrapper from "../contacts/contactsItemWrapper";
import {Box, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import LinkSvg from "../../public/svg/link";
import GitSvg from "../../public/svg/git";
import TelegramSvg from "../../public/svg/telegram";

const SocialMedia = () => {
  const [isMobile] = useMediaQuery("(max-width: 700px)")
  return (
    <Box display={'flex'}>
      <ContactsItemWrapper route={'https://www.linkedin.com/in/roman-gavrilchuk-321791210/'}>
        <LinkSvg />
      </ContactsItemWrapper>
      <ContactsItemWrapper route={'https://github.com/Roman-ua'}>
        <GitSvg />
      </ContactsItemWrapper>
      <ContactsItemWrapper route={'https://t.me/Yep_Roman'}>
        <TelegramSvg />
      </ContactsItemWrapper>
    </Box>
  )
}

export default SocialMedia
