import { ReactComponent as SearchIcon } from "./Search-icon.svg";
import "./searchBox.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <form className="searchBox-form">
      <input
        className="searchBox-input"
        placeholder="Search an album of your choice"
      ></input>
      <button className="searchBox-btn">
        <SearchIcon width={"20px"} height={"20px"} />
      </button>
    </form>
  );
};
