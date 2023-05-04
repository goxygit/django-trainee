import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import s from "./loginForm.module.css";
const Form = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    props.login(data.email, data.password, data.rememberMe);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={s.loginLabel}>
            <div className={s.loginText}>
              <span>Email користувача</span>
            </div>
            <input
              className={s.inputForm}
              type="text"
              placeholder="Введіть будь-ласка email"
              {...register("email", {
                required: "Поле обов`язкове до заповнення",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email нє е валідним",
                },
              })}
            />
            {errors?.email && <span>{errors?.email.message}</span>}
          </label>
        </div>
        <div>
          <label className={s.loginLabel}>
            <div className={s.loginText}>
              <span>Пароль користувача</span>
            </div>
            <input
              className={s.inputForm}
              type="text"
              placeholder="Введіть будь-ласка пароль"
              {...register("password", {
                required: "Поле обов`язкове до заповнення",
                minLength: {
                  value: 8,
                  message: "Мінімальна кількість символів - 8",
                },
                maxLength: {
                  value: 16,
                  message: "Максимальна кількість символів - 16",
                },
              })}
            />
            {errors?.password && <span>{errors?.password.message}</span>}
          </label>
        </div>
        <div className={s.autorizeBlock}>
          <NavLink className={s.returnPassword}>Забули пароль?</NavLink>
          <input
            className={s.loginSubmit}
            type="submit"
            value="Авторизуватися"
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
