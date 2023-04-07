import { create } from "zustand";

interface PaginationStore {
  recordsPerPage: number;
  currentPage: number;
  updateCurrentPage: (newPage: number) => void;
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  recordsPerPage: 6,
  currentPage: 1,
  updateCurrentPage: (newPage: number) => {
    set({ currentPage: newPage });
  },
}));
