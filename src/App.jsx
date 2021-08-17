import Phonebook from 'Components/Phonebook/Phonebook';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from 'Components/HomePage/HomePage';
import { LoginPage } from 'Components/LoginPage/LoginPage';
import { SignupPage } from 'Components/SignupPage/SignupPage';
import { UserBar } from 'Components/UserBar/UserBar';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <UserBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/contacts">
          <Phonebook />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>

        <Redirect to="/" />
      </Switch>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
