import { NavLink } from 'react-router-dom';

export const HomePage = () => {
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
        to="/login"
        style={{
          display: 'block',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        Войти
      </NavLink>
    </div>
  );
};
