import Button from "../Button";
import SearchBox from "../SearchBox";
import "./navbar.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="navbar">
      <img src="qtifylogo.png" alt="qtifylogo" width={"67px"} height={"34px"} />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
};
