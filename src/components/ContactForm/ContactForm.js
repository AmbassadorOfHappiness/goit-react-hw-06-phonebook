import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {addContact} from "../../redux/contacts/actions";
import { getContacts } from '../../redux/contacts/contacts-selectors';
import style from '../ContactForm/ContactForm.module.css'


export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default: return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchByName = contacts.find((el) => el.name === name);

    if (searchByName) {
      alert(`${name} is already in contacts`);
    }

    dispatch(addContact({name, number}))
    setName("");
    setNumber("");
  };

  return (
    <form className={style.formInner} onSubmit={handleSubmit} >
      <label> Name:
        <input
          className='input'
          name="name"
          type="text"
          value={name}
          autoComplete="off"
          title="Имя может состоять только из букв, апострофа, тире и пробелов"
          onChange={handleChange}
        />
        Number:
        <input
          className='input'
          name="number"
          type="tel"
          value={number}
          autoComplete="off"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className='button' type="submit">Add contact</button>
    </form>
  );
}
