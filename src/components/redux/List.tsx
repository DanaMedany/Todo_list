import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../../features/todoList/todoSlice";
import { RootState } from "../../store";
import { MdEdit, MdDelete } from "react-icons/md";

const List = () => {
  // Redux state and dispatch
  const listTodo = useSelector((state: RootState) => state.todo.todoList);
  const dispatch = useDispatch();

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
    // setUpdateTodo(currentUpdate);
    dispatch(update({ currentUpdate, indexToUpdate }));
    // console.log(currentUpdate);
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
              <MdDelete
                className="text-xl"
                onClick={() => handleRemove(index)}
              />
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

export default List;
