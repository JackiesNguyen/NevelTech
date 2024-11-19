import CarouselControls from "@/components/CarouselControls";
import CategoryCard from "@/components/CategoryCard";
import GameCard from "@/components/GameCard";
import hotGameData from "@/mocks/hotGameData";
import hottestCategoryData from "@/mocks/hottestCategoryData";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "./GameHomePage.css";
import Button from "@/components/Button";
import { Loader2, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import Select from "@/components/Select";

const GamesHomePage = () => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const sliderRefHotGames = useRef<Slider | null>(null);
  const sliderRefHottestCategory = useRef<Slider | null>(null);
  const [currentSlideHotGames, setCurrentSlideHotGames] = useState(0);
  const [currentSlideHottestCategory, setCurrentSlideHottestCategory] =
    useState(0);

  const nextHotGames = () => {
    if (sliderRefHotGames.current) {
      sliderRefHotGames.current.slickNext();
    }
  };

  const previousHotGames = () => {
    if (sliderRefHotGames.current) {
      sliderRefHotGames.current.slickPrev();
    }
  };

  const nextHottestCategory = () => {
    if (sliderRefHottestCategory.current) {
      sliderRefHottestCategory.current.slickNext();
    }
  };

  const previousHottestCategory = () => {
    if (sliderRefHottestCategory.current) {
      sliderRefHottestCategory.current.slickPrev();
    }
  };

  const settingsHotGames = {
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlideHotGames(next),
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsHottestCategory = {
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    beforeChange: (_: number, next: number) =>
      setCurrentSlideHottestCategory(next),
    responsive: [
      {
        breakpoint: 880,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const selectOptions = [
    { value: "release_date_asc", label: "Release Date Az" },
    { value: "release_date_desc", label: "Release Date (Newest to Oldest)" },
    { value: "title_az", label: "Title (A-Z)" },
    { value: "title_za", label: "Title (Z-A)" },
  ];

  const handleSelectChange = (value: string) => {
    console.log(value);
  };

  const handleClickLoadMore = () => {
    setIsLoadMore(true);
    setTimeout(() => {
      setIsLoadMore(false);
    }, 1000);
  };

  return (
    <div className="flex-1 w-full overflow-hidden">
      <div className="mb-[50px] md:mb-[80px] overflow-hidden px-5 md:px-0">
        <div className="flex items-center justify-between mb-[30px]">
          <h2 className="text-[18px] sm:text-[28.359px] font-semibold leading-[30px] px-2.5">
            Hot Game
          </h2>
          <div className="hidden sm:block">
            <CarouselControls
              onPrevious={previousHotGames}
              onNext={nextHotGames}
              isPreviousDisabled={currentSlideHotGames === 0}
              isNextDisabled={currentSlideHotGames >= hotGameData.length - 2}
            />
          </div>
          <div className="sm:hidden">
            <Select options={selectOptions} onSelect={handleSelectChange} />
          </div>
        </div>
        <Slider {...settingsHotGames} ref={sliderRefHotGames}>
          {hotGameData.map((game) => (
            <GameCard key={game.gameId} game={game} />
          ))}
        </Slider>
      </div>
      <div className="w-full p-5 md:p-0 mb-10 md:mb-0 hottestCategory">
        <div className="flex items-center justify-between mb-[30px]">
          <h2 className="text-[18px] sm:text-[28.359px] font-semibold leading-[30px] px-2.5">
            Hottest Category
          </h2>
          <div className="hidden md:block">
            <CarouselControls
              onPrevious={previousHottestCategory}
              onNext={nextHottestCategory}
              isPreviousDisabled={currentSlideHottestCategory === 0}
              isNextDisabled={
                currentSlideHottestCategory >= hottestCategoryData.length - 2
              }
            />
          </div>
        </div>
        <Slider {...settingsHottestCategory} ref={sliderRefHottestCategory}>
          {hottestCategoryData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </Slider>
      </div>
      <div className="w-full text-center px-5 mb-5 md:hidden">
        <Button
          className="w-full flex items-center justify-center p-3 gap-2 text-[15px] font-semibold hover:bg-black-01"
          onClick={handleClickLoadMore}
        >
          Load More
          {isLoadMore ? <Loader2 className="animate-spin" /> : <Plus />}
        </Button>
      </div>
      <div className="md:hidden px-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>WEB MAP</AccordionTrigger>
            <AccordionContent>This is content WEB MAP</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>ABOUT US</AccordionTrigger>
            <AccordionContent>This is content ABOUT US</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>EVENTS</AccordionTrigger>
            <AccordionContent>This is content EVENTS</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>OUR PARTNERS</AccordionTrigger>
            <AccordionContent>This is content OUR PARTNERS</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default GamesHomePage;
