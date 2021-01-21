
const SignUp = () => {
  return (
    <div>
      <form className="form">
        <input className="input" type="text" placeholder="username" />
        <input className="input"  type="password" placeholder="password" />
        <button className="button" type="submit">SIGN UP</button>
      </form>
      {/* <div className="login-signup-alt">
        <p>Already have an account? Log in here!</p>
      </div> */}
    </div>
  );
}

export default SignUp;