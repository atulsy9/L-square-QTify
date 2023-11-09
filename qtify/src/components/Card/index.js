import "./card.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ imgsrc, follows, title }) => {
  return (
    <div className="card">
      <img src={imgsrc} alt={title} className="card-img" />
      <div className="card-innerCard">
        <div className="followerCount">{follows} Follows</div>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};
