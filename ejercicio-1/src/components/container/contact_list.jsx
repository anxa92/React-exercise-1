import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/forms/contact'


const ContactListComponent = () => {
    const defaultContact = new Contact ('Fernando', 'Pizarro', 'fernandopizarromartinez92@gmail.com', true)


    return (
        <div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};

export default ContactListComponent;
