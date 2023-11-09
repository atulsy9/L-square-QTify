import "./section.css";
import Card from "../Card";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, Data }) => {
  return (
    <div className="albumGrid">
      <div className="gridHeader">
        <p>{title}</p>
        <div>Collapse</div>
      </div>
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
    </div>
  );
};
