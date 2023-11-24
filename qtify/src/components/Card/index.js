import "./card.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data, view }) => {
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
};
