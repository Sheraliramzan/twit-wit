import {create} from 'zustand';

interface RegisterModelStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useRegisterModel = create<RegisterModelSt>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));