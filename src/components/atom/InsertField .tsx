import { useAtom } from "jotai";

import { todoAtom, listTodoAtom } from "../../state/atom";
import { useTranslation } from "react-i18next";

const InsertField = () => {
  const { t } = useTranslation();

  // This is state atom (jotai)
  const [todoItem, setTodoItem] = useAtom(todoAtom);
  const [listTodo, setListTodo] = useAtom(listTodoAtom);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // checking the todo not to be empty
    if (todoItem !== "") {
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
        placeholder={t("placeholder")}
        onChange={(e) => setTodoItem(e.target.value.trim())}
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

export default InsertField;
