import {create} from 'zustand';

interface EditModelStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useModel = create<EditModelStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));