import {create} from 'zustand';

interface ModelStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useModel = create<ModelStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));