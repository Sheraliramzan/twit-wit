import {create} from 'zustand';

interface RegisterModel {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useModel = create<RegisterModel>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));