import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/authServise';
import { isLogin, setToken } from 'redux/actions';
import { FormItems } from 'Components/FormItems/FormItems';
import { toast } from 'react-hot-toast';
import { SubmitButton } from 'Components/SubmitButton/SubmitButton';
import { loginSchema } from 'utils/validtionSchema';
import css from './LoginPage.module.css';

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

  function postLogin({ data }) {
    dispatch(setToken(data.token));
    dispatch(isLogin(true));
  }

  function loginHandler(event) {
    loginUser({ ...event })
      .then(postLogin)
      .catch(e => toast.error('Неверный логин или пароль'));
  }

  return (
    <div className={css.container}>
      <FormItems
        schema={loginSchema}
        onSubmit={loginHandler}
        initValues={{ email: '', password: '' }}
        inputTags={formikOptions}
      >
        <SubmitButton isLoading={isLoading} label={'Login'} />
      </FormItems>
    </div>
  );
};
