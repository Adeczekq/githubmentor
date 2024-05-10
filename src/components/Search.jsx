/* eslint-disable react/prop-types */
import SearchIcon from "./../assets/icon-search.svg";

function Search({ setUsername, error }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setUsername(event.target.value);
    }
  };
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="flex items-center justify-between shadow-xl gap-2 h-14 p-2  w-full bg-white-light rounded-xl ">
      <div className="flex gap-4">
        <img src={SearchIcon} alt="Search Icon" />
        <input
          className="outline-none bg-white-light cursor-pointer w-full text-color-text"
          placeholder="Search GitHub username..."
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-center gap-9">
        {error && <div className="text-red font-bold">{error}</div>}
        <button
          className="text-white rounded-xl bg-blue flex justify-center items-center h-full p-3 font-semibold hover:opacity-70"
          onClick={handleKeyPress}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
