import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const signup = (e) => {
    e.preventDefault();
    const newUser = {username, password}
    props.signUp(newUser);
    history.push("/login");
  }

  return (
    <div>
      <form className="auth-form" onSubmit={signup}>
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
        <button className="auth-button" type="submit">SIGN UP</button>
      </form>
      {/* <div className="login-signup-alt">
        <p>Already have an account? Log in here!</p>
      </div> */}
    </div>
  );
}

export default SignUp;