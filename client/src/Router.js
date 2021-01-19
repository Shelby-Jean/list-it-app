import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import List from './components/List';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
    {...rest}
    render={(props) => checkAuth()
      ? <Component {...props} />
      : <Redirect to="/login" />
    }
    />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      <ProtectedRoute path='/list' component={List} />
      <ProtectedRoute path='/additem' component={AddItem} />
      <ProtectedRoute path='/edititem/:id' component={EditItem} />
    </Switch>
  )
}

export default Router;