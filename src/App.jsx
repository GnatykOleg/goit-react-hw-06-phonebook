import { useSelector, useDispatch } from 'react-redux';
import { Form, Contacts, Filter } from 'components';
import { addContacts } from './features/contacts/contactsSlice';

export function App() {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const formSubmitData = contact => {
    dispatch(addContacts(contact));
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
