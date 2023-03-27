import {create} from 'zustand';

interface RegisterModelStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useRegisterModel = create<RegisterModelStore>((set) => ({
    isOpen: f,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));