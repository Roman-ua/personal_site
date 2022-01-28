import {contacts_data} from "../../constants/default_data";
import ContactsItemWrapper from "../contacts/contactsItemWrapper";
import {Box, Image, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import LinkSvg from "../../public/svg/link";
import GitSvg from "../../public/svg/git";
import TelegramSvg from "../../public/svg/telegram";

// const renderItemContact = () => {
//   return contacts_data.map((item)=>{
//     return(
//
//         <Image
//           maxW={item.maxW}
//           src={useColorModeValue(`/icons/white/${item.iconWhite}`, `/icons/dark/${item.iconBlack}`)}/>
//       </ContactsItemWrapper>
//     )
//   })
// }
const SocialMedia = () => {
  const [isMobile] = useMediaQuery("(max-width: 900px)")
  return (
    <Box flexDir={'column'} alignItems={'center'} justifyContent={'center'} display={isMobile ? 'none' : 'flex'} position={'fixed'} left={20} bottom={0}>
      <ContactsItemWrapper route={'/'}>
        <LinkSvg />
      </ContactsItemWrapper>
      <ContactsItemWrapper route={'/'}>
        <GitSvg />
      </ContactsItemWrapper>
      <ContactsItemWrapper route={'/'}>
        <TelegramSvg />
      </ContactsItemWrapper>
      <Box
        width={'1px'}
        height={'150px'}
        mt={3}
        backgroundColor={useColorModeValue('cyan.600', '#64ffda')}
      />
    </Box>
  )
}

export default SocialMedia
