import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation, useCurrentQuery } from 'redux/authServise';
import { setToken } from 'redux/actions';

export const LoginPage = () => {
  const [loginUser, { data }] = useLoginMutation();
  const { data: auth, error } = useCurrentQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) {
      console.log('status auth', auth);
    }
  }, [auth]);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setToken(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (error) {
      console.log('Unauthorized', error);
    }
  }, [error]);

  function loginHandler(event) {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    loginUser({ email, password });
  }

  return (
    <form onSubmit={loginHandler}>
      <label>
        User Name
        <input type="email" name="email" autoComplete="false" />
      </label>
      <label>
        Password
        <input type="password" name="password" autoComplete="false" />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};
