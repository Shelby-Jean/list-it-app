import Navigation from './components/Navigation';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux'
// import store from './redux/store';
import './css/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;