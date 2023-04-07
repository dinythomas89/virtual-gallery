import { create } from "zustand";
import { Data } from "../model/Data";

interface ImageStore {
  data: Data[];
  ids: number[];
  fetchData: () => void;
  updateIds: (newIds: number) => void;
}

interface PaginationStore {
  recordsPerPage: number;
  currentPage: number;
  updateCurrentPage: (newPage: number) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  data: [],
  ids: [],
  fetchData: async () => {
    try {
      const response = await fetch("./dataset.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      set({ data: result });
    } catch (error) {
      return error;
    }
  },
  updateIds: (newIds: number) => {
    set((state) => ({
      ids: [...state.ids, newIds],
    }));
  },
}));

export const usePaginationStore = create<PaginationStore>((set) => ({
  recordsPerPage: 6,
  currentPage: 1,
  updateCurrentPage: (newPage: number) => {
    set({ currentPage: newPage });
  },
}));
