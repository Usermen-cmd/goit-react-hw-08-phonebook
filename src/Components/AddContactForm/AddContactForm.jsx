//Styles
import css from './AddContactForm.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//Components
import { FormItems } from 'Components/FormItems/FormItems';
import { SubmitButton } from 'Components/SubmitButton/SubmitButton';
//Utils
import { toast } from 'react-hot-toast';
import { hasName } from 'utils/hasName';
import { contactSchema } from 'utils/validtionSchema';
import {
  useAddContactMutation,
  useGetContactQuery,
} from 'redux/contactApiServise';
import { contactFormOptions } from 'utils/formikOptions';
import { useCurrentQuery } from 'redux/authServise';
import { useEffect } from 'react';

const AddContactForm = () => {
  const { data } = useGetContactQuery();
  const { refetch } = useCurrentQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  function onSubmit(event, actions) {
    if (hasName(event.name, data)) {
      toast.error('Такой контакт уже есть');
    } else {
      addContact({
        ...event,
      })
        .then(toast.success('Добавлено'))
        .catch(error =>
          toast.error(
            `Возникла ошибка ${error.status}, сообщение ${error.data}`,
          ),
        );
    }
    actions.resetForm();
  }

  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <FormItems
        schema={contactSchema}
        onSubmit={onSubmit}
        initValues={{ name: '', number: '' }}
        inputTags={contactFormOptions}
      >
        <SubmitButton label={'add'} isLoading={isLoading} width={'45px'} />
      </FormItems>
    </>
  );
};

export default AddContactForm;
