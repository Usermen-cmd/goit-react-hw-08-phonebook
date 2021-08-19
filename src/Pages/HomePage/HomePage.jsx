import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './HomePage.module.css';

export const HomePage = () => {
  const isLogin = useSelector(s => s.isLoggetIn);
  return (
    <div className={css.container}>
      <h1 className={css.header}>Книга контактов</h1>
      <NavLink to={isLogin ? '/contacts' : '/login'} className={css.link}>
        {isLogin ? 'перейти к контактам' : 'войти'}
      </NavLink>
    </div>
  );
};
