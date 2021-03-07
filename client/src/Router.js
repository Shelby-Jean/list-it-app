import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import LogIn from './containers/LogIn';
import SignUp from './containers/SignUp';
import List from './containers/List';

// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
// }

// const ProtectedRoute = ({component: Component, ...rest}) => {
//   return (
//     <Route
//     {...rest}
//     render={(props) => checkAuth()
//       ? <Component {...props} />
//       : <Redirect to="/login" />
//     }
//     />
//   )
// }

//make list protected route
const Router = () => {
  return (
    <Switch>
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/list' component={List} />
    </Switch>
  )
}

export default Router;