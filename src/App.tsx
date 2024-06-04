import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [listTodo, setListTodo] = useState<string[]>(() => {
    const storedList = localStorage.getItem("myList");
    return storedList ? JSON.parse(storedList) : [];
  });

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // checking the todo not to be empty
    if (todo.trim() !== "") {
      setListTodo([...listTodo, todo]);
      setTodo("");
    }
  };

  // load the todos from local storage
  // emptying my array when I refresh the page

  // useEffect(()=>{
  //   const storedList = localStorage.getItem("myList")
  //   if (storedList) {
  //     setListTodo(JSON.parse(storedList));
  //   }
  // },[])

  // to save todos in local storage

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(listTodo));
  }, [listTodo]);

  const restList = (indexToRemove: number) => {
    const updateList = listTodo.filter((_, index) => index !== indexToRemove);
    setListTodo(updateList);
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-5xl font-bold underline mt-7">Todo App </h1>

      <div className="w-2/5">
        <input
          value={todo}
          type="text"
          className="mt-8 p-2 w-80 border outline-none rounded-md"
          placeholder="Enter your action"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className={`my-4 ml-2 p-2 rounded ${
            todo.length > 3
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </div>

      <div className=" w-2/5 mx-auto mt-5">
        <ul className="list-disc ml-auto ">
          {listTodo.map((value, index) => (
            <div key={index} className="flex items-center justify-between">
              <li className=" mb-2 p-2 text-2xl">{value}</li>
              <span
                className="bg-[#FF4433] px-2 py-1 cursor-pointer rounded-sm"
                onClick={() => restList(index)}
              >
                Rest
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
