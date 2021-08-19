import { FormItems } from 'Components/FormItems/FormItems';
import { SubmitButton } from 'Components/SubmitButton/SubmitButton';
import { contactSchema } from 'utils/validtionSchema';
import { useDispatch } from 'react-redux';
import { isOpen } from 'redux/actions';

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

export const EditModal = () => {
  const dispatch = useDispatch();

  function closeButtonHandler() {
    dispatch(isOpen());
  }

  return (
    <div style={{ border: '1px solid black' }}>
      <FormItems
        schema={contactSchema}
        onSubmit={null}
        initValues={{ name: '', number: '' }}
        inputTags={formikOptions}
      >
        <SubmitButton label={'edit'} width={'45px'} />
      </FormItems>
      <button type="button" onClick={closeButtonHandler}>
        close
      </button>
    </div>
  );
};
