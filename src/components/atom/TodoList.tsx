import { useEffect } from "react";
import { useAtom } from "jotai";
import { listTodoAtom } from "../../state/atom";

const TodoList = () => {
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
    const newValue = prompt("Enter the new value:", listTodo[indexToUpdate]);
    if (newValue) {
      const updatedList = listTodo.map((item, index) =>
        index === indexToUpdate ? newValue : item
      );
      setListTodo(updatedList);
    }
    
  }

  return (
    <div className=" w-2/5 mx-auto mt-5">
      <ul className="list-disc ml-auto ">
        {listTodo.map((value: string, index: number) => (
          <div key={index} className="flex items-center justify-between">
            <li className=" mb-2 p-2 text-2xl">{value}</li>
            <span
              className="bg-[#FF4433] px-2 py-1 cursor-pointer rounded-sm"
              onClick={() => DeleteList(index)}
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

export default TodoList;
