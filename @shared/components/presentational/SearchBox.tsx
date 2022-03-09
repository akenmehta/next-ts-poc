import  { React } from "@shared/vendor";

interface SearchBoxProps {
  placeholder: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
}

const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className="flex ml-8 pt-2 relative mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
      <button onClick={(e) => props.onSubmit()}>
      </button>
    </div>
  );
}

export { SearchBox };
