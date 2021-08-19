import Phonebook from 'Pages/PhonebookPage/Phonebook';
import { Switch, Redirect } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage/HomePage';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { SignupPage } from 'Pages/SignupPage/SignupPage';
import { UserBar } from 'Pages/UserBar/UserBar';
import { Toaster } from 'react-hot-toast';
import * as Routes from 'Routes/Routes';

const App = () => {
  return (
    <>
      <UserBar />
      <Switch>
        <Routes.Public exact path="/">
          <HomePage />
        </Routes.Public>
        <Routes.Private path="/contacts">
          <Phonebook />
        </Routes.Private>
        <Routes.Public path="/login" restricted>
          <LoginPage />
        </Routes.Public>
        <Routes.Public path="/signup" restricted>
          <SignupPage />
        </Routes.Public>

        <Redirect to="/" />
      </Switch>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
