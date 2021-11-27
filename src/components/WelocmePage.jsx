import style from './welcomePage.module.css';

export default function WelcomePage() {
  return (
    <p className={style.welcomePage}>
      Hello!
      <br />
      Welcome to MyContacts App!
      <br />
      Please, Register or Login to start.
    </p>
  );
}
