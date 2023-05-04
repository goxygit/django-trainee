import { NavLink } from "react-router-dom";
import s from "./register.module.css";
import RegisterForm from "./registerForm";
const RegisterPage = () => {
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
            <span className={s.loginText}>Створити аккаунт</span>
          </div>
          <div className={s.backgroundLoginBar}>
            <div className={s.loginEl}>
              <RegisterForm />
              <div></div>
            </div>
          </div>
          <div className={s.bottomEl}>
            <div className={s.bottomText}>
              <NavLink to={"/register"}>Вже є аккаунт? Авторизуйся!</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
