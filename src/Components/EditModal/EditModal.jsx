import { FormItems } from 'Components/FormItems/FormItems';
import { SubmitButton } from 'Components/SubmitButton/SubmitButton';
import { contactSchema } from 'utils/validtionSchema';
import { useDispatch } from 'react-redux';
import { isOpen } from 'redux/actions';
import {
  usePacthContactMutation,
  useGetContactQuery,
} from 'redux/contactApiServise';
import toast from 'react-hot-toast';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { hasName } from 'utils/hasName';
import css from './EditModal.module.css';
import { modalFormOptions } from 'utils/formikOptions';

export const EditModal = ({ data }) => {
  const { data: contacts } = useGetContactQuery();
  const [editContact] = usePacthContactMutation();
  const dispatch = useDispatch();
  const { name, number, id } = data;

  function closeButtonHandler() {
    dispatch(isOpen());
    toast.success('Обновлено');
  }

  const onSubmitHandler = (event, actions) => {
    if (hasName(event.name, contacts)) {
      toast.error('Такой контакт уже есть');
    } else {
      editContact({ event, id })
        .then(closeButtonHandler)
        .catch(e => toast.error('Контакт не обновлён'));
    }
  };

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button
          type="button"
          onClick={closeButtonHandler}
          className={css.cross}
        >
          <AiOutlineClose size="16" />
        </button>
        <FormItems
          schema={contactSchema}
          onSubmit={onSubmitHandler}
          initValues={{ name, number }}
          inputTags={modalFormOptions}
        >
          <SubmitButton label={'edit'} width={'45px'} />
        </FormItems>
      </div>
    </div>,
    document.getElementById('root-modal'),
  );
};
