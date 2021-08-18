import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getName } from 'redux/selectors';
import css from './HomePage.module.css';

export const HomePage = () => {
  const name = useSelector(getName);
  return (
    <div className={css.container}>
      <h1 className={css.header}>Книга контактов</h1>
      <NavLink to={name ? '/contacts' : '/login'} className={css.link}>
        {name ? 'перейти к контактам' : 'войти'}
      </NavLink>
    </div>
  );
};
