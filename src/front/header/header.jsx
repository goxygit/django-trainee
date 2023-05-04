import DropDown from "./dropdownMenu/dropdownMenu";
import { NavLink } from "react-router-dom";
import s from "./home-page.module.css";
import catalog from "../assets/img/catalog-icon.png";
import login from "../assets/img/login-icon.png";
import profile from "../assets/img/profile-icon.png";
import arrow from "../assets/img/arrow.png";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Header = () => {
  const [drop, setDrop] = useState(false);
  return (
    <div className={s.header}>
      <nav className={s.navigate}>
        <NavLink to={"/"}>
          <span className={s.headerText}>Store</span>
        </NavLink>
        <div className={s.navPanel}>
          <div className={s.navElements}>
            <NavLink to={"/catalog"}>
              <span className={s.navText}>Каталог</span>
              <img className={s.Element} src={catalog} />
            </NavLink>
          </div>
          <div className={s.navElements}>
            <NavLink to={"/login"}>
              <span className={s.navText}>Увійти</span>
              <img className={s.Element} src={login} />
            </NavLink>
          </div>
          <div>
            <div
              className={s.profileElement}
              onClick={() => {
                setDrop(!drop);
              }}
            >
              <img className={s.Element} src={profile} />
              <img style={{ width: "8px", height: "8px" }} src={arrow} />
            </div>
            <TransitionGroup>
              {drop && (
                <CSSTransition
                  timeout={500}
                  in={drop}
                  classNames={{
                    enter: s.fadeEnter,
                    enterActive: s.fadeEnterActive,
                    exit: s.fadeExit,
                    exitActive: s.fadeExitActive,
                  }}
                  unmountOnExit
                >
                  <DropDown drop={drop} />
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
