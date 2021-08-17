import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/actions';
import { useSignupMutation } from 'redux/authServise';

export const SignupPage = () => {
  const [signupUser, { data }] = useSignupMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setToken(data));
    }
  }, [data, dispatch]);

  function submitHandler(event) {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    signupUser({ name, email, password });
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        User Name
        <input type="text" name="name" autoComplete="false" />
      </label>
      <label>
        Email
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
