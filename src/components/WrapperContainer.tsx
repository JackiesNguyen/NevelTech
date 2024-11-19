import cn from "@/libs/utils";

interface IWrapperContainerProps {
  children: React.ReactNode;
  className?: string;
}

const WrapperContainer = ({ children, className }: IWrapperContainerProps) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto w-full px-5 overflow-hidden", className)}
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
