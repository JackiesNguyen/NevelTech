import { bannerImg } from "../../assets";
import Slider from "react-slick";
import "./Banner.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  const bannerData = [
    { id: 1, src: bannerImg, alt: "bannerImg-1", title: "Futebol Fevel" },
    { id: 2, src: bannerImg, alt: "bannerImg-2", title: "Futebol Fevel" },
    { id: 3, src: bannerImg, alt: "bannerImg-3", title: "Futebol Fevel" },
    { id: 4, src: bannerImg, alt: "bannerImg-4", title: "Futebol Fevel" },
    { id: 5, src: bannerImg, alt: "bannerImg-5", title: "Futebol Fevel" },
  ];

  return (
    <Slider {...settings} className="banner h-[420px] md:h-[576px]">
      {bannerData.map((item) => (
        <div key={item.id} className="bg-primary-2">
          <div className="max-w-[1400px] w-full mx-auto h-full relative banner__img overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[420px] md:h-[576px] object-cover"
            />
            <div className="absolute bottom-0 w-full text-center md:hidden z-10 banner-gradient">
              <div className="mb-[28.5px]">
                <div className="text-[24.414px] font-medium leading-[27px] text-white mb-3">
                  {item.title}
                </div>
                <Link
                  to="#"
                  className="text-[13.781px] text-white font-medium flex items-center gap-1 justify-center hover:underline"
                >
                  Game Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
