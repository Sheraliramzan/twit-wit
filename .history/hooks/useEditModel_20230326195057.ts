import {create} from 'zustand';

interface ModelStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useLoginModel = create<LoginModelStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));