import Carousel from "react-bootstrap/Carousel";
import "./Banners.css";

const Banners = () => {
  return (
    <Carousel fade className="banner-container">
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL + "/assets/banner3.jpg"}
          alt="Responsive image"
          className="bannerimage"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL + "/assets/banner2.jpg"}
          alt="Responsive image"
          className="bannerimage"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL + "/assets/banner1.webp"}
          alt="Responsive image"
          className="bannerimage"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL + "/assets/banner4.jpg"}
          alt="Responsive image"
          className="bannerimage"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banners;
