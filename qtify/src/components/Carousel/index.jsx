import "./Carousel.css";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../Card";

/* eslint-disable import/no-anonymous-default-export */
export default ({ data, id }) => {
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
        loop={true}
        virtual
      >
        {data.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Card
              imgsrc={cardData.image}
              follows={cardData.follows}
              title={cardData.title}
            />
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
