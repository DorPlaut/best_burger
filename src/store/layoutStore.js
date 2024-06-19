import { create } from 'zustand';

export const useLayoutStore = create((set) => ({
  // section controll
  currentSection: 1,
  setcurrentSection: (currentSection) => set(() => ({ currentSection })),
  goToNextSection: () =>
    set((state) => ({ currentSection: state.currentSection + 1 })),
  goToPreviousSection: () =>
    set((state) => ({ currentSection: state.currentSection - 1 })),

  // loading
  isFirstLoad: true,
  setIsFirstLoad: (isFirstLoad) => set(() => ({ isFirstLoad })),
  isLoading: true,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),

  // mobile
  isMobile: false,
  setIsMobile: (isMobile) => {
    // chack if device is mobile by checking screen width
    if (window.innerWidth < 768) {
      set(() => ({ isMobile: true }));
    } else {
      set(() => ({ isMobile: false }));
    }
  },

  // alerts
  alert: [],
  setAlert: (alert) => set(() => ({ alert })),

  handleAlerts: (alert) => {
    set(() => ({ alert }));
    // clear alert
    setTimeout(() => {
      set(() => ({ alert: [] }));
    }, 4000);
  },
}));
