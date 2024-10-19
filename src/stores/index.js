import { create } from "zustand";

export const useJobApplyStore = create((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ ...state, open: !state.open })),
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  job: null,
  setJob: (job) => set({ job }),
  clearJob: () => set({ job: null }),
}));
