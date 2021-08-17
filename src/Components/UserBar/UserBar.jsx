import { NavLink } from 'react-router-dom';
import { useLogoutMutation } from 'redux/authServise';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthData } from 'redux/actions';
import { getName } from 'redux/selectors';
import { toast } from 'react-hot-toast';

export const UserBar = () => {
  const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();
  const name = useSelector(getName);

  function logoutHandler() {
    logoutUser()
      .then(dispatch(setAuthData('')))
      .catch(e => toast.error('что-то пошло не так'));
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
        {!name && (
          <>
            <NavLink to="/signup" style={{ marginRight: '30px' }}>
              Signup
            </NavLink>
            <NavLink to="/login" style={{ marginRight: '30px' }}>
              Login
            </NavLink>
          </>
        )}
        <NavLink to="/" style={{ marginRight: '30px' }}>
          Home
        </NavLink>
        {name && (
          <NavLink to="/contacts" style={{ marginRight: '30px' }}>
            Contacts
          </NavLink>
        )}
        {name && (
          <>
            <p
              style={{
                margin: '0',
                marginLeft: 'auto',
              }}
            >
              Hello, {name}
            </p>
            <button
              type="button"
              onClick={logoutHandler}
              style={{ marginLeft: '30px', display: 'block', height: '18px' }}
            >
              logout
            </button>
          </>
        )}
      </div>
      <hr />
    </>
  );
};
