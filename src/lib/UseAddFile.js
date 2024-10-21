import { create } from "zustand";

export const useAddFile = create((set) => ({
    isOpenDialogFolder: false,

    AddIdForFolder: null,
    AddNameForFolder: null,
    setIsOpenDialogFolder: () => set((state) => ({
        isOpenDialogFolder: !state.isOpenDialogFolder
    })),
    setAddId: (id) => set((state) => ({
        AddIdForFolder: id
    })),
    setAddName: (name) => set((state) => ({
        AddNameForFolder: name
    })),
})) 