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
      <Route path='/list' component={List} />
      <Route path='/additem' component={AddItem} />
      <Route path='/edititem/:id' component={EditItem} />
    </Switch>
  )
}

export default Router;