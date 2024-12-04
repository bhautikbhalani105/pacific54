import { create } from 'zustand';

export interface IFinancOpt {
  purchasePrice: number;
  closingCosts: number;
  addinlClosingCosts: number;
}

type IFinancOptAct = {
  toggFinancOpt: <K extends keyof IFinancOpt>(key: K, value: IFinancOpt[K]) => void;
};

export const useFinancOpt = create<IFinancOpt & IFinancOptAct>((set) => {
  return {
    purchasePrice: 0,
    closingCosts: 0,
    addinlClosingCosts: 0,
    toggFinancOpt: (key, value) =>
      set((state) => ({
        ...state,
        [key]: value?.toString()
      }))
  };
});
