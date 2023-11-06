import "./card.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="card">
      <img src="songImg.png" alt="song" className="card-img" />
      <div className="card-innerCard">
        <div className="followerCount">100M Follows</div>
      </div>
      <div
        style={{
          color: "white",
          fontSize: "8px",
          fontFamily: "Poppins",
          fontWeight: "400",
          height: "21px",
          width: "105px",
          marginTop: "6px",
        }}
      >
        New Bollywood
      </div>
    </div>
  );
};
