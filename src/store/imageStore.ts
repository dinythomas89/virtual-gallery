import { create } from "zustand";
import { Data } from "../model/Data";

interface ImageStore {
  data: Data[];
  loading: boolean;
  error: boolean;
  fetchData: () => void;
}

export const useImageStore = create<ImageStore>((set, get) => ({
  data: [],
  loading: false,
  error: false,
  fetchData: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await fetch("./dataset.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      set((state) => ({ data: (state.data = result), loading: false }));
    } catch (err) {
      if (err instanceof Error) {
        set(() => ({ error: true, loading: false }));
      }
    }
  },
}));
