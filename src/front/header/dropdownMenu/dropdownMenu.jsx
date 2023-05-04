import { NavLink } from "react-router-dom";
import s from "./dropdown.module.css";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
const dropDown = ({ drop }) => {
  return (
    <div className={classNames(s.dropDownMenu)}>
      <div className={s.textPadding}>
        <NavLink>
          <span className={s.text}>Профіль</span>
        </NavLink>
      </div>
      <div className={s.textPadding}>
        <NavLink>
          <span className={s.text}>Замовлення</span>
        </NavLink>
      </div>
      <div className={s.textPadding}>
        <NavLink>
          <span className={s.text}>Адмін-панель</span>
        </NavLink>
      </div>
      <div className={classNames(s.textPadding, s.logoutText)}>
        <div>
          <NavLink>
            <span className={s.text}>Вийти</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default dropDown;
