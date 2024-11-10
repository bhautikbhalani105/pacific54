import { create } from 'zustand';

interface ViewStore {
  propertyView: 'list' | 'grid';
  toggleView: () => void;
}

export const useViewStore = create<ViewStore>((set) => {
  const savedView = localStorage.getItem('view');

  return {
    propertyView: savedView ? (savedView as 'list' | 'grid') : 'list',
    toggleView: () =>
      set((state) => {
        const newView = state.propertyView === 'grid' ? 'list' : 'grid';
        localStorage.setItem('view', newView);
        return { propertyView: newView };
      })
  };
});
