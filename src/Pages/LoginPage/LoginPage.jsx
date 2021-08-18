import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/authServise';
import { setAuthData } from 'redux/actions';
import { useHistory } from 'react-router-dom';
import { FormItems } from 'Components/FormItems/FormItems';
import { toast } from 'react-hot-toast';
import { SubmitButton } from 'Components/SubmitButton/SubmitButton';
import { loginSchema } from 'utils/validtionSchema';

const formikOptions = [
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

export const LoginPage = () => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const history = useHistory();

  function postLogin({ data }) {
    dispatch(setAuthData(data));
    history.push({ pathname: '/' });
  }

  function loginHandler(event) {
    loginUser({ ...event })
      .then(postLogin)
      .catch(e => toast.error('Неверный логин или пароль'));
  }

  return (
    <FormItems
      schema={loginSchema}
      onSubmit={loginHandler}
      initValues={{ email: '', password: '' }}
      inputTags={formikOptions}
    >
      <SubmitButton isLoading={isLoading} label={'Login'} />
    </FormItems>
  );
};
