import { useDispatch, useSelector } from "react-redux";
import { setTodo, add } from "../../features/todoList/todoSlice"; 
import { RootState } from "../../store"; 



const InsertInput = () => {
  // Redux state and dispatch
  const todoItem = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();


  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // checking the todo not to be empty
    if (todoItem.trim() !== "") {
      dispatch(add());
    }
  };

  return (
    <div className="w-2/5">
      <input
        value={todoItem}
        type="text"
        className="mt-8 p-2 w-80 border outline-none rounded-md"
        placeholder="Enter your action"
        onChange={(e) => dispatch(setTodo(e.target.value))}
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

export default InsertInput;
