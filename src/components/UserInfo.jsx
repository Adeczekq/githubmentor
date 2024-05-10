import Banner from "./Banner";
import PropTypes from "prop-types";
function UserInfo({ userInfo }) {
  return (
    <div className="flex flex-col  gap-7">
      <Banner userInfo={userInfo} />
      <div className=" text-xs text-color-text leading-6 ">
        {userInfo.bio || "Bio not set"}
      </div>
    </div>
  );
}
UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    bio: PropTypes.string,
  }),
};
export default UserInfo;
