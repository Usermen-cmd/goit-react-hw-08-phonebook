import { FormItems } from 'Components/FormItems/FormItems';
import { SubmitButton } from 'Components/SubmitButton/SubmitButton';
import { contactSchema } from 'utils/validtionSchema';
import { useDispatch } from 'react-redux';
import { isOpen } from 'redux/actions';
import { usePacthContactMutation } from 'redux/contactApiServise';
import toast from 'react-hot-toast';
import { createPortal } from 'react-dom';

const formikOptions = [
  {
    type: 'text',
    label: 'Name',
    id: 'name',
  },
  {
    type: 'tel',
    label: 'Phone',
    id: 'number',
  },
];

export const EditModal = ({ data }) => {
  const [editContact] = usePacthContactMutation();
  const dispatch = useDispatch();
  const { name, number, id } = data;

  function closeButtonHandler() {
    dispatch(isOpen());
  }

  const onSubmitHandler = (event, actions) => {
    editContact({ event, id })
      .then(closeButtonHandler)
      .catch(e => toast.error('Контакт не обновлён'));
  };

  return createPortal(
    <div
      style={{
        width: '100vw',
        height: '100vh',
        border: '1px solid black',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        // padding: '30px',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          borderRadius: '5px',
          backgroundColor: '#eee',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          padding: '30px',
        }}
      >
        <button type="button" onClick={closeButtonHandler}>
          close
        </button>
        <FormItems
          schema={contactSchema}
          onSubmit={onSubmitHandler}
          initValues={{ name, number }}
          inputTags={formikOptions}
        >
          <SubmitButton label={'edit'} width={'45px'} />
        </FormItems>
      </div>
    </div>,
    document.getElementById('root-modal'),
  );
};
