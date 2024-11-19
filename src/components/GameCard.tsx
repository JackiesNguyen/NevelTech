import Button from "./Button";

interface IGameCardProps {
  game: {
    gameId: number;
    title: string;
    description: string;
    banner: string;
    image: string;
  };
}

const GameCard = ({ game }: IGameCardProps) => {
  return (
    <div className="px-2.5 outline-none cursor-pointer">
      <div className="-px-2.5">
        <img
          src={game.banner}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="pt-[15px] md:pt-[30px] flex items-center justify-between gap-2 md:gap-5">
          <img
            src={game.image}
            alt={game.title}
            className="md:w-[90px] w-[60px] h-[60px] md:h-[90px]  object-cover rounded-xl"
          />
          <div className="flex items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-[15px] md:text-[19.219px] font-semibold leading-[23px]">
                {game.title}
              </h2>
              <div className="text-[12px] md:text-[13.672px] font-normal leading-[18px] line-clamp-2">
                {game.description}
              </div>
            </div>
            <Button>View</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
