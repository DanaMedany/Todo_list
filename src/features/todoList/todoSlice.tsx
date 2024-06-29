import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  todo: string;
  todoList: string[];
}

// Helper function to load from local storage
const loadFromLocalStorage = (): string[] => {
  const savedList = localStorage.getItem("myList");
  return savedList ? JSON.parse(savedList) : [];
};

const initialState: TodoState = {
  todo: "",
  todoList: loadFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        (_, index) => index !== action.payload
      );
    },
    add: (state) => {
      state.todoList.push(state.todo);
      state.todo = "";
    },
    setTodo: (state, action: PayloadAction<string>) => {
      state.todo = action.payload;
    },
    update: (
      state,
      action: PayloadAction<{ indexToUpdate: number; currentUpdate: string }>
    ) => {
      const { currentUpdate, indexToUpdate } = action.payload;
      state.todo = currentUpdate;
      const todoIndex = state.todoList.findIndex(
        (_, index) => index === indexToUpdate
      );
      state.todoList[todoIndex] = currentUpdate;
    },
  },
});

export const { remove, add, setTodo, update } = todoSlice.actions;

export default todoSlice.reducer;
