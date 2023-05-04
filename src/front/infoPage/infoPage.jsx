import s from "./infoPage.module.css";
const InfoPage = () => {
  return (
    <div className={s.infoPage}>
      <div className={s.content}>
        <div>
          <div style={{ padding: "0 0 12px" }}>
            <span className={s.header}>Store</span>
          </div>
          <div>
            <span className={s.text}>
              Новые образы и лучшие бренды на Store. Бесплатная доставка по
              всему миру! Аутлет: до -70% Собственный бренд. -20% новым
              покупателям.
            </span>
          </div>
          <input className={s.submit} type="submit" value="Почати покупки" />
        </div>
      </div>
    </div>
  );
};
export default InfoPage;
