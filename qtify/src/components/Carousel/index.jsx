import "./Carousel.css";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Tooltip from "@mui/material/Tooltip";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../Card";

/* eslint-disable import/no-anonymous-default-export */
export default ({ data, id, view }) => {
  return (
    <div className="carousel-section">
      <Swiper
        modules={[Virtual, Navigation]}
        slidesPerView={7}
        spaceBetween={30}
        navigation={{
          nextEl: ".left-arrow" + id,
          prevEl: ".right-arrow" + id,
        }}
        virtual
      >
        {data.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Tooltip title="Delete">
              <Card data={cardData} view={view} />
            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${"right-arrow" + id} arrow right-arrow`}>
        <img src="./prev.png" alt="prev_arrow" />
      </div>
      <div className={`${"left-arrow" + id} arrow left-arrow`}>
        <img src="./next.png" alt="next_arrow" />
      </div>
    </div>
  );
};
