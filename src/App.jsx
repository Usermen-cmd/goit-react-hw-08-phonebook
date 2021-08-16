import Phonebook from 'Components/Phonebook/Phonebook';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from 'Components/HomePage/HomePage';
import { LoginPage } from 'Components/LoginPage/LoginPage';
import { SignupPage } from 'Components/SignupPage/SignupPage';
import { UserBar } from 'Components/UserBar/UserBar';

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
    </>
  );
};

export default App;
