import {useColorModeValue, Image, Container} from "@chakra-ui/react";
import ContactsItemWrapper from "../components/contacts/contactsItemWrapper";
import {contacts_data} from "../constants/default_data";


const renderItemContact = () => {
  return contacts_data.map((item)=>{
    return(
      <ContactsItemWrapper key={item.className} route={item.link}>
        <div className={`back_ground ${item.className}`}/>
        <Image
          maxW={item.maxW}
          src={useColorModeValue(`/icons/white/${item.iconWhite}`, `/icons/dark/${item.iconBlack}`)}/>
      </ContactsItemWrapper>
    )
  })
}
const Contacts = () => {
  return (
    <Container
      mt={'7%'}
      alignItems={'center'}
      display={'flex'}
      flexDir={'row'}
      justifyContent={'space-between'}>
      {renderItemContact()}
    </Container>
  )
}

export default Contacts
