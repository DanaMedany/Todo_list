import { useEffect } from "react";
import { listAtom } from "../../state/mongez";

const Todos = () => {
  const [list, setList] = listAtom.useState();

  

  useEffect(() => {
    if (!localStorage.getItem("myList")) return;
    const storedData = JSON.parse(localStorage.getItem("myList") as string);
    if (Array.isArray(storedData)) {
      setList(storedData);
    }
  }, [setList]);

  return (
    <div className=" w-2/5 mx-auto mt-5">
      <ul className="list-disc ml-auto ">
        {list.map((value: string, index: number) => (
          <div key={index} className="flex items-center justify-between">
            <li className=" mb-2 p-2 text-2xl">{value}</li>
            <span
            className="bg-[#FF4433] px-2 py-1 cursor-pointer rounded-sm"
            onClick={() =>{}}
          >
            Delete
          </span> 
            <span
            className="bg-[#FF4433] px-2 py-1 cursor-pointer rounded-sm"
            onClick={() => {}}
          >
            update
          </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
