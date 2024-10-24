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

export const useChatBotStore = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  onToggle: () => set((state) => ({ ...state, open: !state.open })),
  // chatBot: null,
  // setChatBot: (chatBot) => set({ chatBot }),
  // clearChatBot: () => set({ chatBot: null }),
}));

export const useTrackShipmentStore = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false, shipment: null }),
  shipment: null,
  setShipment: (shipment) => set({ shipment }),
}));

export const useMediaGalleryStore = create((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false, media: null }),
  media: null,
  setMedia: (media) => set({ media }),
}));
