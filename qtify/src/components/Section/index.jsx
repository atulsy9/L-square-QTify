import "./section.css";
import Card from "../Card";
import { useState } from "react";
import Carousel from "../Carousel";
import TabView from "../TabView";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, Data, id, tabView, genresData }) => {
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
          {!tabView ? (showBtn ? "Show all" : "Collapse") : null}
        </div>
      </div>
      {showBtn ? (
        <>
          {tabView ? (
            <TabView id={id} genresData={genresData} />
          ) : (
            <Carousel data={Data} id={id} />
          )}
        </>
      ) : (
        <div className="card-component">
          {console.log(Data)}
          {Data.map((cardData) => {
            return <Card data={cardData} />;
          })}
        </div>
      )}
    </div>
  );
};
