import PropTypes from "prop-types";

function Banner({ userInfo }) {
  return (
    <div className="flex gap-5">
      <div>
        <img
          className="rounded-full aspect-square w-16  "
          src={userInfo?.avatarUrl}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-color-text ">{userInfo?.name}</span>
        <a className="text-blue text-xs " href={userInfo?.profileUrl}>
          @{userInfo?.login}
        </a>
        <span className="text-color-text text-xs ">
          Joined {userInfo?.joinDate}
        </span>
      </div>
    </div>
  );
}
Banner.propTypes = {
  userInfo: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    profileUrl: PropTypes.string,
    joinDate: PropTypes.string,
  }),
};
export default Banner;
