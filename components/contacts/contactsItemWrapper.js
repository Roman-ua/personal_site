import Link from "next/link";
import {ItemBox} from "./contactsStyled";


const ContactsItemWrapper = ({route, children}) => {
  return (
    <Link href={route}>
      <a target={'_blank'}>
        <ItemBox>
          {children}
        </ItemBox>
      </a>
    </Link>
  )
}

export default ContactsItemWrapper
