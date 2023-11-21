import "./section.css";
import Card from "../Card";
import { useState } from "react";
import Carousel from "../Carousel";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, Data, id }) => {
  const [showBtn, setshowBtn] = useState(true);
  return (
    <div className="albumGrid">
      <div className="gridHeader">
        <p>{title}</p>
        <div
          onClick={() => {
            setshowBtn(!showBtn);
          }}
        >
          {showBtn ? "Show all" : "Collapse"}
        </div>
      </div>
      {showBtn ? (
        <Carousel data={Data} id={id} />
      ) : (
        <div className="card-component">
          {Data.map((cardData) => {
            return (
              <Card
                key={cardData.id}
                imgsrc={cardData.image}
                follows={cardData.follows}
                title={cardData.title}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
