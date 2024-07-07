import { useState } from "react";
import { listAtom } from "../../state/mongez";

import { MdEdit, MdDelete, MdSave } from "react-icons/md";

const Todos = () => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");
  const list = listAtom.useValue();

  const handleDelete = (removeIndex: number) => {
    listAtom.update(listAtom.value.filter((_, index) => index !== removeIndex));
  };

  const handleEdit = (index: number, value: string) => {
    setEditingIndex(index);
    setEditingText(value);
  };

  const handleUpdate = () => {
    if (editingIndex === null) return;
    const updatedList = list.map((item, index) =>
      index === editingIndex ? editingText : item
    );
    listAtom.update(updatedList);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="w-2/5 mx-auto mt-5">
      <ul className="list-none ml-auto">
        {list.map((value: string, index: number) => (
          <div
            key={index}
            className="bg-[#4b4bc3] flex items-center justify-between rounded-md mb-4 w-[80%]"
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="mb-2 p-2 text-2xl w-full"
              />
            ) : (
              <li className="mb-2 p-2 text-2xl">{value}</li>
            )}
            <div className="flex mr-4 cursor-pointer">
              <MdDelete
                className="text-xl"
                onClick={() => handleDelete(index)}
              />
              {editingIndex === index ? (
                <MdSave className="text-xl ml-5" onClick={handleUpdate} />
              ) : (
                <MdEdit
                  className="text-xl ml-5"
                  onClick={() => handleEdit(index, value)}
                />
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
