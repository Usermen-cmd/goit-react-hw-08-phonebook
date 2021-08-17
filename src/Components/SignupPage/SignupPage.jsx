import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthData } from 'redux/actions';
import { useSignupMutation } from 'redux/authServise';
import { FormItems } from 'Components/FormItems/FormItems';
import { useHistory } from 'react-router-dom';
import { SubmitButton } from 'Components/SubmitButton/SubmitButton';

const formikOptions = [
  {
    type: 'text',
    label: 'Name',
    id: 'name',
  },
  {
    type: 'email',
    label: 'Email',
    id: 'email',
  },
  {
    type: 'password',
    label: 'Password',
    id: 'password',
  },
];

export const SignupPage = () => {
  const [signupUser, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();
  const history = useHistory();

  function postSubmit({ data }) {
    dispatch(setAuthData(data));
    history.push({ pathname: '/' });
  }

  function submitHandler(event, actions) {
    signupUser({ ...event })
      .then(postSubmit)
      .catch(error => toast.error('Такой email уже зарегестрирован'));
    actions.resetForm();
  }

  return (
    <FormItems
      // schema={null}
      onSubmit={submitHandler}
      initValues={{ name: '', email: '', password: '' }}
      inputTags={formikOptions}
    >
      <SubmitButton isLoading={isLoading} label={'Signup'} />
    </FormItems>
  );
};
