import { todosAtom, listAtom } from "../../state/mongez";

const Input = () => {
  const [inputValue, setInputValue] = todosAtom.useState();
  const [list, setList] = listAtom.useState();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // checking the todo not to be empty
    if (inputValue.trim() !== "") {
      const newTodo = [...list, inputValue];
      setList(newTodo);
      setInputValue("");
    }
  };

  listAtom.onChange((newValue) => {
    localStorage.setItem("myList", JSON.stringify(newValue));
  });

  return (
    <div className="w-2/5">
      <input
        value={inputValue}
        type="text"
        className="mt-8 p-2 w-80 border outline-none rounded-md"
        placeholder="Enter your action"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className={`my-4 ml-2 p-2 rounded ${
          inputValue.length > 3
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        ADD
      </button>
    </div>
  );
};

export default Input;
