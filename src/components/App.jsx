import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import css from './App.module.css';

export const App = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {items.length === 0 && <h2>No added numbers!</h2>}
      {items.length > 0 && <Filter />}
      {isLoading && <p className={css.loader}>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      {items.length > 0 && <ContactList />}
    </div>
  );
};
