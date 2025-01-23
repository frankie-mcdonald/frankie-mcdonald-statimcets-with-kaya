import "./LoginCard.scss";

function LoginCard({ onLogin }) {
  return (
    <form className="form">
      <div className="form__input-section">
        <label className="form__label" htmlFor="">
          Email
        </label>
        <input className="form__input" type="text" />
        <label className="form__label" htmlFor="">
          Password
        </label>
        <input className="form__input" type="password" />
      </div>
      <h6 className="form__body">Forgot Password?</h6>
      <h3 className="form__button" onClick={onLogin}>
        Login
      </h3>
      <h5 className="form__text">Sign up /Register here</h5>
    </form>
  );
}

export default LoginCard;
