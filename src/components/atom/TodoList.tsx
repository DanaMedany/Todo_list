import { useEffect } from "react";
import { useAtom } from "jotai";
import { listTodoAtom } from "../../state/atom";
import { MdEdit, MdDelete } from "react-icons/md";
import { useTranslation } from "react-i18next";

const TodoList = () => {
  const { t } = useTranslation();

  // Jotai state
  const [listTodo, setListTodo] = useAtom(listTodoAtom);

  // to save todos in local storage
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(listTodo));
  }, [listTodo]);

  // Delete list for Jotai
  const DeleteList = (indexToRemove: number) => {
    const updateList = listTodo.filter(
      (_, index: number) => index !== indexToRemove
    );
    setListTodo(updateList);
  };

  //Update list
  const handleUpdate = (indexToUpdate: number) => {
    // update logic here
    const newValue = prompt(t("prompt"), listTodo[indexToUpdate]);
    if (newValue) {
      const updatedList = listTodo.map((item, index) =>
        index === indexToUpdate ? newValue : item
      );
      setListTodo(updatedList);
    }
  };

  return (
    <div className=" w-2/5 mx-auto mt-5">
      <ul className="list-none ml-auto ">
        {listTodo.map((value: string, index: number) => (
          <div
            key={index}
            className="bg-[#4b4bc3] flex items-center justify-between rounded-md mb-4 w-[80%]"
          >
            <li className="mb-2 p-2 text-2xl flex items-center">{value}</li>

            <div className="flex mr-4 cursor-pointer">
              <MdDelete className="text-xl" onClick={() => DeleteList(index)} />
              <MdEdit
                className="text-xl ml-5"
                onClick={() => handleUpdate(index)}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
