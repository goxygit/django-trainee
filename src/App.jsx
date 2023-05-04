import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InfoPage from "./front/infoPage/infoPageContainer";
import CatalogPage from "./front/catalogPage/catalogPageContainer";
import LoginPageContainer from "./front/loginPage/loginPageContainer";
import RegisterPage from "./front/registerPage/registerPage";
import ProfileContainer from "./front/profile/profileContainer";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InfoPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/login" element={<LoginPageContainer />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </div>
  );
};
export default App;
