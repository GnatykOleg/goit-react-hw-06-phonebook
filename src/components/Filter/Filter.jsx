import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contactsSlice';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <label htmlFor="filter" className={s.labelFilter}>
        <span>Find contacts by name</span>
        <input
          placeholder="type text..."
          className={s.filterInput}
          onChange={event =>
            dispatch(filterContacts(event.currentTarget.value))
          }
          type="name"
          name="filter"
          id="filter"
          value={value}
          required
        />
      </label>
    </div>
  );
}
