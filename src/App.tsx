import "./App.css";

// Import component related to jotai (atom state)
// import InsertField from "./components/atom/InsertField ";
// import TodoList from "./components/atom/TodoList";

// Import component related to (Redux state)
// import InsertInput from "./components/redux/InsertInput";
// import List from "./components/redux/List";

// Import component related to (mongez state)
import Input from './components/mongez/Input'
// import Todos from './components/mongez/Todos'


function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold underline mt-7">Todo App </h1>
        {/* this component works with atom sate */}
        {/* <InsertField />
        <TodoList /> */}

        {/* this component works with redux sate */}
        {/* <InsertInput />
        <List /> */}


        {/* this component works with mongez state */}
        <Input />
        {/* <Todos /> */}

      </div>
    </>
  );
}

export default App;
