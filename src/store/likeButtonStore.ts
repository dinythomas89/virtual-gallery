import { create } from "zustand";

interface LikeButtonStore {
  liked: number[];
  setLiked: (id: number) => void;
}

export const useLikeButtonStore = create<LikeButtonStore>((set) => ({
  liked: [],
  setLiked: (id) => set((state) => ({ liked: [...state.liked, id] })),
}));
