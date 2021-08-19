//Styles
import css from './ContactList.module.css';
//Components
import { LinearProgress } from '@material-ui/core';
import { ContactListItem } from 'Components/ContactListItem/ContactListItem';
import { EditModal } from 'Components/EditModal/EditModal';
//Utils
import { useEffect } from 'react';
import { getFiltredContacts } from 'utils/getFiltredContacts';
import { useSelector } from 'react-redux';
import { useGetContactQuery } from 'redux/contactApiServise';
import toast from 'react-hot-toast';
import { getFilterValue } from 'redux/selectors';

const ContactList = () => {
  const { data, isFetching, error } = useGetContactQuery();
  const filterValue = useSelector(getFilterValue);
  const fitredContacts = getFiltredContacts(data, filterValue);
  const isOpenModal = useSelector(s => s.isOpenModal);

  useEffect(() => {
    error &&
      toast.error(`Возникла ошибка ${error.status}, сообщение ${error.data}`);
  }, [error]);

  return (
    <>
      <h2 className={css.header}>Your contacts</h2>
      {isFetching && <LinearProgress style={{ marginTop: '20px' }} />}
      <ul className={css.list}>
        {fitredContacts.map(contact => {
          return <ContactListItem contact={contact} key={contact.id} />;
        })}
      </ul>
      {isOpenModal && <EditModal />}
    </>
  );
};

export default ContactList;
