import { ChevronLeft, ChevronRight } from "lucide-react";
import cn from "../libs/utils";

interface ICarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

const CarouselControls = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
}: ICarouselControlsProps) => {
  return (
    <div className="flex items-center gap-1 mr-1">
      <button
        className={cn(
          "w-[30px] h-[30px] text-center hover:bg-slate-300 rounded-full flex items-center justify-center",
          {
            "opacity-50 hover:bg-transparent": isPreviousDisabled,
          }
        )}
        onClick={onPrevious}
        disabled={isPreviousDisabled}
      >
        <ChevronLeft className="text-black-60" />
      </button>
      <button
        className={cn(
          "w-[30px] h-[30px] text-center hover:bg-slate-300 rounded-full flex items-center justify-center",
          {
            "opacity-50 hover:bg-transparent": isNextDisabled,
          }
        )}
        onClick={onNext}
        disabled={isNextDisabled}
      >
        <ChevronRight className="text-black-60" />
      </button>
    </div>
  );
};

export default CarouselControls;
