import { NavLink } from 'react-router-dom';

export const UserBar = () => {
  return (
    <>
      <NavLink to="/signup" style={{ marginRight: '30px' }}>
        Signup
      </NavLink>
      <NavLink to="/login" style={{ marginRight: '30px' }}>
        Login
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <hr />
    </>
  );
};
