import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import s from "./profileForm.module.css";
const ProfileForm = (props) => {
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
            <div className={s.firstForms}>
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
            <div className={s.secondForms}>
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
          <label className={s.profileFile}>
            <div placeholder="Виведіть зображення" className={s.browse}>
              <span>Виведіть зображення</span>
            </div>
            <div className={s.inputBrowse}>
              <span>Browse</span>
            </div>
            <input type="file" />
          </label>
        </div>
        <div>
          <label className={s.loginLabel}>
            <div className={s.firstForms}>
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
            <div className={s.secondForms}>
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
        <div className={s.autorizeBlock}>
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
export default ProfileForm;
