import Phonebook from 'Pages/PhonebookPage/Phonebook';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage/HomePage';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { SignupPage } from 'Pages/SignupPage/SignupPage';
import { UserBar } from 'Pages/UserBar/UserBar';
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
