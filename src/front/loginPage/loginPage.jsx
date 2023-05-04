import { NavLink } from "react-router-dom";
import Form from "./loginForm/loginForm";
import s from "./loginPage.module.css";
const LoginPage = () => {
  return (
    <div className={s.background}>
      <div>
        <div className={s.alert}>
          <div className={s.alertText}>
            <b>Holy guacamole!</b> Пане, ви довбойоб. Будь-ласка введіть данні
            правильно
          </div>
        </div>
        <div className={s.loginBar}>
          <div className={s.topBar}>
            <span className={s.loginText}>Авторизація</span>
          </div>
          <div className={s.backgroundLoginBar}>
            <div className={s.loginEl}>
              <Form />
              <div></div>
            </div>
          </div>
          <div className={s.bottomEl}>
            <div className={s.bottomText}>
              Потрібен аккаунт?<NavLink to={"/register"}>Зареєструйся!</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
