import { NavLink } from "react-router-dom";
import s from "./sideBar.module.css";
import classNames from "classnames";
const Sidebar = () => {
  return (
    <div className={s.sideBar}>
      <div>
        <div className={s.sideBarEl}>
          <NavLink className={classNames(s.Store, s.a)} to={"/home"}>
            Store
          </NavLink>
        </div>
        <div className={s.sideBarEl}>
          <NavLink className={s.a}>Нове</NavLink>
        </div>
        <div className={s.sideBarEl}>
          <NavLink className={s.a}>Одежа</NavLink>
        </div>
        <div className={s.sideBarEl}>
          <NavLink className={s.a}>Взуття</NavLink>
        </div>
        <div className={s.sideBarEl}>
          <NavLink className={s.a}>Аксесуари</NavLink>
        </div>
        <div className={s.sideBarEl}>
          <NavLink className={s.a}>Подарунки</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
