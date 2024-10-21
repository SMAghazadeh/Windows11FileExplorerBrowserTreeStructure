import { create } from "zustand";

export const useAddFile = create  ((set) => ({
    isOpenDialogFolder : false,



    setIsOpenDialogFolder: () => set((state) => ({
        isOpenDialogFolder: !state.isOpenDialogFolder
    })),
})) 