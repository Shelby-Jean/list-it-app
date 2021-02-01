import { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const signup = (e) => {
    e.preventDefault();
    const newUser = {username, password}
    const options = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    };
    fetch('/auth/signup', options);
  }

  return (
    <div>
      <form className="form" onSubmit={signup}>
        <input 
          required
          className="input" 
          type="text" 
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <input 
          required
          className="input"
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button className="button" type="submit">SIGN UP</button>
      </form>
      {/* <div className="login-signup-alt">
        <p>Already have an account? Log in here!</p>
      </div> */}
    </div>
  );
}

export default SignUp;