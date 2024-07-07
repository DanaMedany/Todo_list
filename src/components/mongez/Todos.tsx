// import { useEffect } from "react";
import { listAtom } from "../../state/mongez";

import { MdEdit, MdDelete } from "react-icons/md";

const Todos = () => {
  const list = listAtom.useValue();

  const handleDelete = (removeIndex: number) => {
    listAtom.update(listAtom.value.filter((_, index) => index != removeIndex));
  };

  const handleUpdate = (removeIndex: number) => {};

  return (
    <div className=" w-2/5 mx-auto mt-5">
      <ul className="list-none ml-auto ">
        {list.map((value: string, index: number) => (
          <div
            key={index}
            className="bg-[#4b4bc3] flex items-center justify-between rounded-md mb-4 w-[80%]"
          >
            <li className=" mb-2 p-2 text-2xl">{value}</li>
            <div className="flex mr-4 cursor-pointer">
              <MdDelete
                className="text-xl"
                onClick={() => handleDelete(index)}
              />
              <MdEdit
                className="text-xl ml-5"
                onClick={() => {
                  handleUpdate(index);
                }}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
