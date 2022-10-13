import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h4>
                Name: {contact.name}
            </h4>
            <h4>
                Surname: {contact.surname}
            </h4>
            <h4>
                Email: {contact.email}
            </h4>
            <h4>
                Online: {contact.connected ? 'Contacto En Linea':'Contacto No Disponible'}
            </h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
