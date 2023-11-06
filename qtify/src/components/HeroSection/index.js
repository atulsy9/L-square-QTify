import "./heroSection.css";
export default function heroSection() {
  return (
    <div className="heroSection">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "31px",
        }}
      >
        <div className="textContent">100 Thousand Songs, ad-free</div>
        <div className="textContent">Over thousands podcast episodes</div>
      </div>
      <img
        src="vibrating-headphone1.png"
        alt="vibrating-headphone"
        width={"212px"}
        height={"212px"}
      />
    </div>
  );
}
