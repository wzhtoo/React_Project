import ChangeProfile from "../components/ChangeProfile";

const Profile = (props) => {
  return (
    <div>
      <h1>Profile, {props.username}</h1>
      <ChangeProfile setUsername={props.setUsername} />
    </div>
  );
};

export default Profile;
