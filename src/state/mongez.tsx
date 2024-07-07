import { atom } from "@mongez/react-atom";
import cache from "@mongez/cache";

export const listAtom = atom<string[]>({
  key: "list",
  default: ["Hi", "Done"],
  beforeUpdate(task) {
    cache.set("myList", task);
    return task;
  },
});

// this give me errors
// Uncaught TypeError: Cannot read properties of undefined (reading 'get')
//     at CacheManager.get (@mongez_cache.js?v=f9748bca:37:24)
//     at mongez.tsx?t=1720367487198:5:20


// default: cache.get("myList", []),
