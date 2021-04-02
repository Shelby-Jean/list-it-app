import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import cookie from 'cookie';

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

  // const getToken = () => {
  //   const cookies = cookie.parse(document.cookie);
  //   return cookies["token"];
  // }

  const login = (e) => {
    e.preventDefault();
    const user = {username, password};

    const cookies = cookie.parse(document.cookie);
    const headerToken = cookies["token"];

    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + headerToken
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      if(data.authenticated){
        const token = data.token;
        document.cookie = `token=${token}`;
        props.logIn();
        history.push("/list");
      }
    })
    .catch((error) => {
      console.log('Error:', error);
    });
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
      <Link to="/signup">
        <div className="login-signup-alt">
          <p>Don't have an account? Sign up here!</p>
        </div>
      </Link>
    </div>
  );
}

export default LogIn;