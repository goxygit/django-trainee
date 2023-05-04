import s from "./catalogBar.module.css";
import { NavLink } from "react-router-dom";

const catalogBar = ({ products }) => {
  return (
    <div className={s.productBar}>
      {products.map((p) => {
        return (
          <div className={s.productBars}>
            <div className={s.firstBar}>
              <img className={s.img} src={p.img} alt="" />
            </div>
            <div className={s.middleBar}>
              <div className={s.secondBar}>
                <NavLink className={s.header}>{p.name}</NavLink>
                <div>
                  <p className={s.price}>{p.price}$</p>
                </div>
                <div>
                  <p>{p.info}</p>
                </div>
              </div>
            </div>
            <div className={s.lastBar}>
              <input
                type="submit"
                value="Відправити до кошика"
                className={s.submit}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default catalogBar;
