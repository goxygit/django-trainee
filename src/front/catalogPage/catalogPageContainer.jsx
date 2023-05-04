import { connect } from "react-redux";
import CatalogPage from "./catalogPage";
import Header from "../header/header";

const CatalogPageContainer = (props) => {
  return (
    <div>
      <Header />
      <CatalogPage {...props} />
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    products: state.catalog.products,
  };
};
export default connect(mapStateToProps, {})(CatalogPageContainer);
