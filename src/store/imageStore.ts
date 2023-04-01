import { create } from "zustand";
import { Data } from "../model/Data";

interface ImageStore {
  data: Data[];
  ids: number[];
  updateData: (newData: Data[]) => void;
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
  updateData: (newData: Data[]) => {
    set({ data: newData });
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
