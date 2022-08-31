import { useSelector, useDispatch } from 'react-redux';
import { Form, Contacts, Filter } from 'components';
import { addContacts } from './redux/contacts/contactsSlice';
import shortid from 'shortid';

export function App() {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const formSubmitData = contact => {
    const newContactName = contact.name.toLowerCase();

    if (contacts.some(el => el.name.toLowerCase() === newContactName)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      const newContact = {
        id: shortid(),
        ...contact,
      };
      dispatch(addContacts(newContact));
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className="appDiv">
      <h1>Phonebook</h1>
      <Form formSubmitData={formSubmitData} />
      <h2>Contacts</h2>
      <Filter />
      <Contacts data={filteredContacts} />
    </div>
  );
}
