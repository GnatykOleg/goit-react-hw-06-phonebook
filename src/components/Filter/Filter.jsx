import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../features/contacts/contactsSlice';
// import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <label htmlFor="filter" className={s.labelFilter}>
        Find contacts by name
        <input
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

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
