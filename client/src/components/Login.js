import '../css/LogIn.css';

const LogIn = () => {
  return (
    <div>
      <form className="login-form">
        <input className="login-input" type="text" placeholder="username" />
        <input className="login-input"  type="password" placeholder="password" />
        <button className="login-button" type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default LogIn;