import IconLocation from "./../assets/icon-location.svg";
import IconWebsite from "./../assets/icon-website.svg";
import IconTwitter from "./../assets/icon-twitter.svg";
import IconCompany from "./../assets/icon-company.svg";
import PropTypes from "prop-types";
function Links({ userInfo }) {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
      <div className="flex  items-center gap-4">
        <img
          className={userInfo.location ? "w-5" : "w-5 opacity-30"}
          src={IconLocation}
        />
        <span
          className={
            userInfo.location
              ? "text-color-text text-xs"
              : "text-color-text text-xs opacity-30"
          }
        >
          {userInfo.location || "Not Available"}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <img
          className={userInfo.blog ? "w-5" : "w-5 opacity-30"}
          src={IconWebsite}
        />
        <a href={userInfo.blog} className="text-color-text text-xs">
          <span className={userInfo.blog ? "hover:border-b-2" : "opacity-30"}>
            {userInfo.blog || "Not Available"}
          </span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <img
          className={userInfo.twitter ? "w-5" : "w-5 opacity-30"}
          src={IconTwitter}
        />
        <span
          className={
            userInfo.twitter
              ? "text-color-text text-xs"
              : "text-color-text text-xs opacity-30"
          }
        >
          {userInfo.twitter || "Not Available"}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <img
          className={userInfo.company ? "w-5" : "w-5 opacity-30"}
          src={IconCompany}
        />
        <span
          className={
            userInfo.company
              ? "text-color-text text-xs"
              : "text-color-text text-xs opacity-30"
          }
        >
          {userInfo.company || "Not Available"}
        </span>
      </div>
    </div>
  );
}
Links.propTypes = {
  userInfo: PropTypes.shape({
    location: PropTypes.string,
    blog: PropTypes.string,
    twitter: PropTypes.string,
    company: PropTypes.string,
  }),
};

export default Links;
