
const LogIn = () => {
  return (
    <div>
      <form className="form">
        <input className="input" type="text" placeholder="username" />
        <input className="input"  type="password" placeholder="password" />
        <button className="button" type="submit">LOG IN</button>
      </form>
      {/* <div className="login-signup-alt">
        <p>Don't have an account? Sign up here!</p>
      </div> */}
    </div>
  );
}

export default LogIn;