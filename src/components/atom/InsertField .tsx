import { useAtom } from "jotai";

import { todoAtom, listTodoAtom } from "../../state/atom";

const InsertField = () => {
  // This is state atom (jotai)
  const [todoItem, setTodoItem] = useAtom(todoAtom);
  const [listTodo, setListTodo] = useAtom(listTodoAtom);

  
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // checking the todo not to be empty
    if (todoItem.trim() !== "") {
      setListTodo([...listTodo, todoItem]);
      setTodoItem("");
    }
  };

  return (
    <div className="w-2/5">
      <input
        value={todoItem}
        type="text"
        className="mt-8 p-2 w-80 border outline-none rounded-md"
        placeholder="Enter your action"
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className={`my-4 ml-2 p-2 rounded ${
          todoItem.length > 3
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        ADD
      </button>
    </div>
  );
};

export default InsertField;
