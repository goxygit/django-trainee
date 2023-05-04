import s from "./profile.module.css";
import ProfileForm from "./profileForm/profileForm";
const ProfilePage = () => {
  return (
    <div className={s.background}>
      <div className={s.contentBlock}>
        <div className={s.editProfile}>
          <div>
            <span className={s.profileHeader}>Профіль</span>
          </div>
          <div className={s.userImg}>
            <img
              className={s.profilePhoto}
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />
          </div>
          <div>
            <ProfileForm />
          </div>
        </div>
        <div className={s.basket}></div>
      </div>
    </div>
  );
};
export default ProfilePage;
