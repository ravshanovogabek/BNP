import React from 'react';
import Contacts from './Contacts/Contacts';
import ContactItem from './contact-item/ContactItem';


function ContactLayout() {
  return (
    <div>
      <Contacts />
      <ContactItem />
    </div>
  );
}

export default ContactLayout;
