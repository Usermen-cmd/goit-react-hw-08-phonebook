import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

export const Private = ({ children, ...props }) => {
  const isLogin = useSelector(s => s.isLoggetIn);
  return <Route {...props}>{isLogin ? children : <Redirect to="/" />}</Route>;
};

export const Public = ({ children, restricted = false, ...props }) => {
  const isLogin = useSelector(s => s.isLoggetIn);
  const isRedirect = restricted && isLogin;

  return (
    <Route {...props}>
      {isRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};
