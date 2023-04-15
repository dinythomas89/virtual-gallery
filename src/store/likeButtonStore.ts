import { create } from "zustand";

interface LikeButtonStore {
  likedCardIds: number[];
  toggleLike: (id: number) => void;
}

export const useLikeButtonStore = create<LikeButtonStore>((set) => ({
  likedCardIds: [],
  toggleLike: (id: number) =>
    set((state) => {
      const likedCardIds = [...state.likedCardIds];
      const index = likedCardIds.indexOf(id);
      if (index !== -1) {
        likedCardIds.splice(index, 1);
      } else {
        likedCardIds.push(id);
      }
      return { likedCardIds };
    }),
}));
