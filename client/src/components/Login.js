import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const login = (e) => {
    e.preventDefault();
    const user = {username, password};
    document.cookie = "loggedIn=true;max-age=60*1000";
    props.setUser(user);
    history.push("/list");
  }

  return (
    <div>
      <form className="auth-form" onSubmit={login}>
        <input 
          required
          className="auth-input" 
          type="text" 
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <input 
          required
          className="auth-input" 
          type="password" 
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button className="auth-button" type="submit">LOG IN</button>
      </form>
      {/* <div className="login-signup-alt">
        <p>Don't have an account? Sign up here!</p>
      </div> */}
    </div>
  );
}

export default LogIn;