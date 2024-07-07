import { useRef } from "react";
import { listAtom } from "../../state/mongez";
import { useTranslation } from "react-i18next";

const Input = () => {
  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = inputRef.current?.value?.trim();
    if (!inputValue) return;
    inputRef.current!.value = "";

    const list = listAtom.value;
    list.push(inputValue);

    listAtom.update([...list]);
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/5">
      <input
        ref={inputRef}
        type="text"
        className="mt-8 p-2 w-80 border outline-none rounded-md "
        placeholder={t("placeholder")}
      />
      <button className={`my-4 mx-2 p-2 rounded bg-blue-500 text-white`}>
        {t("add")}
      </button>
    </form>
  );
};

export default Input;
