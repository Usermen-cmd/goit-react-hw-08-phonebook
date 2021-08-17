//Styles
import css from './AddContactForm.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//Components
import { FormItems } from 'Components/FormItems/FormItems';
import { SubmitButton } from 'Components/SubmitButton/SubmitButton';
//Utils
import { toast } from 'react-hot-toast';
import { hasName } from 'utils/hasName';
import { schema } from 'utils/validtionSchema';
import {
  useAddContactMutation,
  useGetContactQuery,
} from 'redux/contactApiServise';

const formikOptions = [
  {
    type: 'text',
    label: 'Name',
    id: 'name',
  },
  {
    type: 'tel',
    label: 'Phone',
    id: 'tel',
  },
];

const AddContactForm = () => {
  const { data } = useGetContactQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

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
    return;
  }

  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <FormItems
        schema={schema}
        onSubmit={onSubmit}
        initValues={{ name: '', tel: '' }}
        inputTags={formikOptions}
      >
        <SubmitButton label={'add'} isLoading={isLoading} width={'45px'} />
      </FormItems>
    </>
  );
};

export default AddContactForm;
