import { NavLink, useHistory } from 'react-router-dom';
import { useLogoutMutation } from 'redux/authServise';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthData } from 'redux/actions';
import { getName } from 'redux/selectors';
import { toast } from 'react-hot-toast';
import css from './UserBar.module.css';

export const UserBar = () => {
  const history = useHistory();
  const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();
  const name = useSelector(getName);

  function postLogout() {
    dispatch(setAuthData(''));
    history.push({ pathname: '/' });
  }

  function logoutHandler() {
    logoutUser()
      .then(postLogout)
      .catch(e => toast.error('что-то пошло не так'));
  }

  return (
    <>
      <div className={css.bar}>
        {!name && (
          <>
            <NavLink to="/signup" className={css.link}>
              Signup
            </NavLink>
            <NavLink to="/login" className={css.link}>
              Login
            </NavLink>
          </>
        )}
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        {name && (
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        )}
        {name && (
          <>
            <p className={css.userName}>Hello, {name}</p>
            <button
              type="button"
              onClick={logoutHandler}
              className={css.button}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </>
  );
};
