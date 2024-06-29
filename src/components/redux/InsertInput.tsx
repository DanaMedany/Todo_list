import { useDispatch, useSelector } from "react-redux";
import { setTodo, add } from "../../features/todoList/todoSlice";
import { RootState } from "../../store";
import { useTranslation } from "react-i18next";

const InsertInput = () => {
  const { t } = useTranslation();

  // Redux state and dispatch
  const todoItem = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // checking the todo not to be empty
    if (todoItem !== "") {
      dispatch(add());
    }
  };

  return (
    <div className="w-2/5">
      <input
        value={todoItem}
        type="text"
        className="mt-8 p-2 w-80 border outline-none rounded-md"
        placeholder={t("placeholder")}
        onChange={(e) => dispatch(setTodo(e.target.value.trim()))}
      />
      <button
        onClick={handleSubmit}
        className={`my-4 mx-2 p-2 rounded ${
          todoItem.length > 3
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {t("add")}
      </button>
    </div>
  );
};

export default InsertInput;
