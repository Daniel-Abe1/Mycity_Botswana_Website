import { create } from 'zustand'

interface DownloadModalStore {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useDownloadModalStore = create<DownloadModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))

// Custom hook for download modal
export const useDownloadModal = () => {
  const { isOpen, open, close } = useDownloadModalStore()
  
  return {
    isOpen,
    openDownloadModal: open,
    closeDownloadModal: close,
  }
}