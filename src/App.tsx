import "./App.css";

// Import component related to jotai (atom state)
// import InsertField from "./components/atom/InsertField ";
// import TodoList from "./components/atom/TodoList";

// Import component related to (Redux state)
// import InsertInput from "./components/redux/InsertInput";
// import List from "./components/redux/List";

// Import component related to (mongez state)
import Input from "./components/mongez/Input";
import Todos from "./components/mongez/Todos";

import { useTranslation } from "react-i18next";
import { Languages } from "./constant";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
  };

  const currentDirection = i18n.dir(i18n.language);

  return (
    <>
      <div
        dir={currentDirection}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="text-5xl font-bold underline mt-7">{t("title")} </h1>

        <div
          className={`absolute top-10 right-[15%] ${
            i18n.language === "en" ? "right-50" : "left-50"
          }`}
        >
          <select className="rounded-md" onChange={changeLanguage}>
            {Languages.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* this component works with atom sate */}
        {/* <InsertField />
        <TodoList /> */}

        {/* this component works with redux sate */}
        {/* <InsertInput />
        <List /> */}

        {/* this component works with mongez state */}
        <Input />
        <Todos />
      </div>
    </>
  );
}

export default App;
