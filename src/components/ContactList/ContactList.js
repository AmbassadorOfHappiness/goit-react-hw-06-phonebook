import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import {deleteContact} from "../../redux/contacts/actions";
import ContactListItem from './ContactListItem';
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const deleteContacts = id => dispatch(deleteContact(id));

  return (
  <ul className={style.title}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onRemoveContact={()=> deleteContacts(id)}
      />
    ))}
  </ul>    
  )
};

export default ContactList;
