import { atom } from "jotai";
import {atomWithStorage} from "jotai/utils";

export const todoAtom = atom<string>("");
export const listTodoAtom = atomWithStorage<string[]>('todo', []);