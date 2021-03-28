import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

  const getToken = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["token"];
  }

  const login = (e) => {
    e.preventDefault();
    const user = {username, password};

    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': getToken()
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      if(data.authenticated){
        console.log(data)
        const token = data.token;
        document.cookie = token;
        props.logIn();
        //get and/or set user?
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
      {/* <div className="login-signup-alt">
        <p>Don't have an account? Sign up here!</p>
      </div> */}
    </div>
  );
}

export default LogIn;