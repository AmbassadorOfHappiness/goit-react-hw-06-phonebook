import React from 'react';

// import styles from '../ContactListItem/contactListItem.module.css';

const ContactListItem = ({ name, number, id, onRemoveContact }) => {
  return (
  <li>
          <p>{name} : {number}</p>
          <button

          type="button"
          className='button'
          onClick={() => onRemoveContact(id)}
        >
          Delete
        </button>
  </li>
)};

export default ContactListItem;