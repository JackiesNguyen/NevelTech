import cn from "@/libs/utils";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ className, children, onClick }: IButtonProps) => {
  return (
    <button
      className={cn(
        "outline-none py-2 px-6 border rounded-md text-[13.781px] font-semibold leading-[14px] hover:bg-black-60 hover:text-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
