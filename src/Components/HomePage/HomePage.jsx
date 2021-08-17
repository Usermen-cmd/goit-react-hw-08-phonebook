import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getName } from 'redux/selectors';

export const HomePage = () => {
  const name = useSelector(getName);
  return (
    <div
      style={{
        padding: '50px 0',
        width: '100%',
        height: 'calc(100vh - 60px)',
        backgroundSize: 'cover',
        backgroundImage:
          "url('https://pcvector.net/uploads/posts/2018-08/1533326959_low-poly-background-generator-min.png')",
      }}
    >
      <h1
        style={{
          color: '#fff',
          textAlign: 'center',
        }}
      >
        Книга контактов
      </h1>
      <NavLink
        to={name ? '/contacts' : '/login'}
        style={{
          display: 'block',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        {name ? 'перейти к контактам' : 'войти'}
      </NavLink>
    </div>
  );
};
