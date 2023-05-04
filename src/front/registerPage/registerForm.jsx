import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import s from "./register.module.css";
const RegisterForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={s.loginLabel}>
            <div className={s.forms}>
              <div className={s.loginText}>
                <span>Ім'я</span>
              </div>
              <input
                className={s.inputForm}
                type="text"
                placeholder="Введіть будь-ласка ім'я"
                {...register("name", {
                  required: "Поле обов`язкове до заповнення",
                })}
              />
              {errors?.name && <span>{errors?.name.message}</span>}
            </div>
            <div className={s.forms}>
              <div className={s.loginText}>
                <span>Фамілія</span>
              </div>
              <input
                className={s.inputForm}
                type="text"
                placeholder="Введіть будь-ласка фамілію"
                {...register("surname", {
                  required: "Поле обов`язкове до заповнення",
                })}
              />
              {errors?.surname && <span>{errors?.surname.message}</span>}
            </div>
          </label>
        </div>
        <div>
          <label className={s.loginLabel}>
            <div className={s.forms}>
              <div className={s.loginText}>
                <span>Ім'я корстувача</span>
              </div>
              <input
                className={s.inputForm}
                type="text"
                placeholder="Введіть будь-ласка nickname"
                {...register("nickname", {
                  required: "Поле обов`язкове до заповнення",
                })}
              />
              {errors?.nickname && <span>{errors?.nickname.message}</span>}
            </div>
            <div className={s.forms}>
              <div className={s.loginText}>
                <span>email</span>
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
            </div>
          </label>
        </div>
        <div>
          <label className={s.loginLabel}>
            <div className={s.forms}>
              <div className={s.loginText}>
                <span>Пароль</span>
              </div>
              <input
                className={s.inputForm}
                type="text"
                placeholder="Введіть будь-ласка пароль"
                {...register("password", {
                  required: "Поле обов`язкове до заповнення",
                })}
              />
              {errors?.password && <span>{errors?.password.message}</span>}
            </div>
            <div className={s.forms}>
              <div className={s.loginText}>
                <span>Повторіть пароль</span>
              </div>
              <input
                className={s.inputForm}
                type="text"
                placeholder="Введіть будь-ласка пароль"
                {...register("returnPassword", {
                  required: "Поле обов`язкове до заповнення",
                })}
              />
              {errors?.returnPassword && (
                <span>{errors?.returnPassword.message}</span>
              )}
            </div>
          </label>
        </div>
        <div className={s.autorizeBlock}>
          <input
            className={s.loginSubmit}
            type="submit"
            value="Створити аккаунт"
          />
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
