import { create } from 'zustand';

export interface IPropertyDetail {
  propertyType: string;
  folioNumber: string | null;
  mlsNumber: number | null;
  mlsStatus: 'active' | 'contingent' | 'pending' | 'closed' | 'expired' | 'canceled' | 'withdrawn';
  beds: number | null;
  baths: number | null;
  lotSize: number | null;
  yearBuilt: number | null;
  reo: boolean;
  shortSale: boolean;
  pool: boolean;
  parking: string;
  // mlsStatusInc: number;
}

type Action = {
  toggleType: <K extends keyof IPropertyDetail>(key: K, value: IPropertyDetail[K]) => void;
  // mlsStatusIncFn: () => void;
};

export const usePropertyDetail = create<IPropertyDetail & Action>((set) => {
  return {
    propertyType: '',
    folioNumber: null,
    mlsNumber: null,
    mlsStatus: 'pending',
    beds: null,
    baths: null,
    lotSize: null,
    yearBuilt: null,
    reo: false,
    shortSale: false,
    pool: false,
    parking: '',
    // mlsStatusInc: 0,
    // mlsStatusIncFn: () => set((state) => ({ mlsStatusInc: state.mlsStatusInc + 1 })),
    toggleType: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value?.toString()
      }))
  };
});
