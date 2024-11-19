interface ISelectOption {
  value: string;
  label: string;
}

interface ISelectProps {
  options: ISelectOption[];
  onSelect: (value: string) => void;
}

const Select = ({ options, onSelect }: ISelectProps) => {
  return (
    <select
      className="text-[12px] outline-none rounded-md border border-[#ccc] sm:text-sm text-black p-2 cursor-pointer font-semibold"
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
