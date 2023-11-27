import "./card.css";
import { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data, view }) => {
  const [noOfSongs, setnoOfSongs] = useState(0);
  useEffect(() => {
    if (data.songs) {
      setnoOfSongs(data.songs.length);
    }
  }, []);
  if (view) {
    return (
      <div className="card">
        <img src={data.image} alt={data.title} className="card-img" />
        <div className="card-innerCard">
          {view ? (
            <div className="followerCount">{data.likes} Likes</div>
          ) : (
            <div className="followerCount">{data.follows} Follows</div>
          )}
        </div>
        <div className="title">{data.title}</div>
      </div>
    );
  } else {
    return (
      <Tooltip
        title={`${noOfSongs} Songs`}
        placement="top"
        className="card"
        arrow
      >
        <img src={data.image} alt={data.title} className="card-img" />
        <div className="card-innerCard">
          {view ? (
            <div className="followerCount">{data.likes} Likes</div>
          ) : (
            <div className="followerCount">{data.follows} Follows</div>
          )}
        </div>
        <div className="title">{data.title}</div>
      </Tooltip>
    );
  }
};
