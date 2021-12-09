//@ts-nocheck
import create from "zustand";
import { persist } from "zustand/middleware";
interface UserInterface {
  user: object | null;
  setUser: (by: object | null) => void;
}

export const useUserStore = create<UserInterface>(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage",
    }
  )
);
