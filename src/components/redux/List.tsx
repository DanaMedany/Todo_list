import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../../features/todoList/todoSlice";
import { RootState } from "../../store";

const List = () => {
  // Redux state and dispatch
  const listTodo = useSelector((state: RootState) => state.todo.todoList);
  const dispatch = useDispatch();

  // Temporary state to store the update todo value for editing
  const [updateTodo, setUpdateTodo] = useState("");

  // to save todos in local storage
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(listTodo));
  }, [listTodo]);

  // Remove todo for Redux
  const handleRemove = (indexToRemove: number) => {
    dispatch(remove(indexToRemove));
  };

  // Update to todo
  const handleUpdate = (indexToUpdate: number) => {
    const currentUpdate = listTodo[indexToUpdate];
    setUpdateTodo(currentUpdate);
    dispatch(update({ currentUpdate, indexToUpdate }));
  };

  return (
    <div className=" w-2/5 mx-auto mt-5">
      <ul className="list-disc ml-auto ">
        {listTodo.map((value: string, index: number) => (
          <div key={index} className="flex items-center justify-between">
            <li className=" mb-2 p-2 text-2xl">{value}</li>
            <span
              className="bg-[#FF4433] px-2 py-1 cursor-pointer rounded-sm"
              onClick={() => handleRemove(index)}
            >
              Delete
            </span>
            <span
              className="bg-[#FF4433] px-2 py-1 cursor-pointer rounded-sm"
              onClick={() => handleUpdate(index)}
            >
              update
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
