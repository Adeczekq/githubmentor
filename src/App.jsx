import Links from "./components/Links";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import UserStats from "./components/UserStats";
import { useState, useEffect } from "react";

function App() {
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    avatarUrl: "",
    login: "",
    profileUrl: "",
    name: "",
    joinDate: "",
    reposCount: 0,
    followersCount: 0,
    followingCount: 0,
    twitter: "",
    company: "",
    location: "",
    bio: "",
    blog: "",
  });
  const [username, setUsername] = useState("octocat");

  useEffect(() => {
    async function getUserInfo(username) {
      const url = `https://api.github.com/users/${username}`;

      try {
        const response = await fetch(url);
        const userData = await response.json();
        const date = new Date(userData.created_at);
        const dateOptions = { day: "numeric", month: "short", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-GB", dateOptions);
        // Pobieranie potrzebnych danych
        const {
          avatar_url: avatarUrl,
          login,
          name,
          html_url: profileUrl,
          public_repos: reposCount,
          followers,
          following,
          twitter_username: twitter = "Not Available",
          company = "Not Available",
          location = "Not Available",
          bio,
          blog: blogUrl = "Not Available",
        } = userData;
        setUserInfo({
          avatarUrl,
          login,
          name,
          profileUrl,
          joinDate: formattedDate,
          reposCount,
          followersCount: followers,
          followingCount: following,
          twitter,
          company,
          location,
          bio,
          blog: blogUrl,
        });
        if (response.status === 404) {
          throw new Error("User not found");
        }
      } catch (error) {
        setError("No results");
      }
    }
    if (username !== "") {
      getUserInfo(username);
      setError("");
    }
  }, [username]); // Wywołanie useEffect za każdym razem, gdy zmienia się wartość username

  return (
    <div className="m-8 flex flex-col gap-9  md:m-32 xl:m-64 xl:mb-auto ">
      <NavBar />
      <Search username={username} setUsername={setUsername} error={error} />

      <div className="shadow-xl rounded-xl flex flex-col gap-8 p-5 bg-white-light ">
        <UserInfo userInfo={userInfo} />
        <UserStats userInfo={userInfo} />
        <Links userInfo={userInfo} />
      </div>
    </div>
  );
}

export default App;
