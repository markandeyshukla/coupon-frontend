import './profile.css';
import { CgProfile } from "react-icons/cg";

function ProfileSlide() {
  return (
    <div className="profile-container">
      <div className="profile-button">
        <CgProfile />
      </div>

      <div className="slider">
        <ul>
          <li>My Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSlide;
