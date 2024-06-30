import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StoreToken {
  token: string | null;
  setToken: (token: string) => void;
  type: string | null;
  setType: (type: string) => void;
  firstLetter: string;
  setFirstLetter: (firstLetter: string) => void;
}

const useAuthStore = create<StoreToken>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => {
        set({ token });
      },
      type: null,
      setType: (type: string) => {set({ type })},
      firstLetter: "U",
      setFirstLetter: (firstLetter: string) => {set({ firstLetter })},
    }),
    { name: "" }
  )
);

export { useAuthStore };
