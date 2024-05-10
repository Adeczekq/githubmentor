import PropTypes from "prop-types";
function UserStats({ userInfo }) {
  return (
    <div className="flex p-6 justify-around rounded-xl bg-light-grey">
      <div className="flex flex-col gap-3 items-center">
        <span className="text-xs text-color-text">Repos</span>
        <span className="font-bold text-color-text">{userInfo.reposCount}</span>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="text-xs text-color-text">Followers</span>
        <span className="font-bold text-color-text">
          {userInfo.followersCount}
        </span>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="text-xs text-color-text">Following</span>
        <span className="font-bold text-color-text">
          {userInfo.followingCount}
        </span>
      </div>
    </div>
  );
}
UserStats.propTypes = {
  userInfo: PropTypes.shape({
    reposCount: PropTypes.number,
    followersCount: PropTypes.number,
    followingCount: PropTypes.number,
  }),
};

export default UserStats;
