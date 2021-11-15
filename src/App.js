import './App.css';

import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import ContactList from './components/ContactList/ContactList'

function App () {
  return (
    <>
      <Section title='Phonebook'>
        <ContactForm />
      </Section>
      <Filter />
      {ContactList && (<Section title='Contacts'>
        <ContactList />
      </Section>)}
    </>
  );
}

export default App;
