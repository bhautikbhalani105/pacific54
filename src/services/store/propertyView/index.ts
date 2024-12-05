import { create } from 'zustand';

interface ViewStore {
  propertyView: 'list' | 'grid';
  toggleView: () => void;
}

export const useViewStore = create<ViewStore>((set) => {
  const savedView = localStorage.getItem('view');

  return {
    propertyView: savedView ? (savedView as 'list' | 'grid') : 'list',
    toggleView: () => {
      const toggleAsync = async (currentView: string) => {
        const newView = currentView === 'grid' ? 'list' : 'grid';
    
        // Simulate async operation (e.g., API call)
        await new Promise((resolve) => setTimeout(resolve, 100));
    
        localStorage.setItem('view', newView);
        set({ propertyView: newView }); // Synchronously update state after async operation
      };
    
      set((state) => {
        toggleAsync(state.propertyView); // Trigger the async function
        return state; // Return the current state synchronously to avoid errors
      });
    },
        
  };
});
