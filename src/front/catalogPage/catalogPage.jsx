import Sidebar from "./sideBar/sidebar";
import CatalogBar from "./catalogBar/catalogBar";
import s from "./catalogPage.module.css";
const CatalogPage = (props) => {
  return (
    <div className={s.catalogPage}>
      <Sidebar />
      <CatalogBar {...props} />
    </div>
  );
};
export default CatalogPage;
