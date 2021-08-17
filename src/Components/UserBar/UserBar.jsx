import { NavLink } from 'react-router-dom';
import { useLogoutMutation } from 'redux/authServise';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'redux/actions';

export const UserBar = () => {
  const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();
  const name = useSelector(s => s.token?.user?.name);

  function logoutHandler() {
    logoutUser();
    dispatch(setToken(''));
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
        <NavLink to="/signup" style={{ marginRight: '30px' }}>
          Signup
        </NavLink>
        <NavLink to="/login" style={{ marginRight: '30px' }}>
          Login
        </NavLink>
        <NavLink to="/" style={{ marginRight: '30px' }}>
          Home
        </NavLink>
        <NavLink to="/contacts" style={{ marginRight: '30px' }}>
          Contacts
        </NavLink>
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
