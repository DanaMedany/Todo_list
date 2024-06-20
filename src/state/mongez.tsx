import {atom} from '@mongez/react-atom'

export const todosAtom = atom({
  key: 'todos',
  default: "",
})

export const listAtom = atom<string[]>({
  key: 'list',
  default: ["Doing task", "Going to work"],
})