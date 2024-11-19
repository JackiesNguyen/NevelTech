import { v4 as uuidv4 } from "uuid";

interface ICategoryCardProps {
  category: {
    title: string;
    description: string;
    icon: string;
    images: string[];
    bgPrimaryCard?: string;
  };
}

const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <div className="px-2.5 cursor-pointer">
      <div className="bg-black-05 rounded-[28px] p-5 -px-2.5 overflow-hidden">
        <div className="grid grid-cols-2 gap-4 grid-rows-3">
          <div className="row-span-2">
            <div
              className="p-5 flex flex-col h-full flex-2 row-span-2 rounded-[20px] gap-6"
              style={{ backgroundColor: category.bgPrimaryCard }}
            >
              <img
                src={category.icon}
                alt={category.title}
                className="w-6 h-6 object-cover"
              />
              <h3 className="text-white text-[17.266px] md:text-[21.656px] not-italic font-normal line-clamp-1">
                {category.title}
              </h3>
              <p className="text-white text-[10px] md:text-[13.781px] font-normal leading-5 opacity-60 line-clamp-3">
                {category.description}
              </p>
            </div>
          </div>
          <div className="row-span-1 flex justify-between">
            {category.images.slice(0, 2).map((image) => (
              <div className="flex-1" key={uuidv4()}>
                <img src={image} alt="bannerImg" className="w-full h-full" />
              </div>
            ))}
          </div>
          <div className="row-span-2">
            <img
              src={category.images[2]}
              alt={category.title}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="flex border row-span-1 justify-between">
            {category.images.slice(3, 5).map((image) => (
              <div className="flex-1" key={uuidv4()}>
                <img src={image} alt="bannerImg" className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
