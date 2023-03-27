import {create} from 'zustand';

interface LoginModel {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useLoginModel = create<LoginModel>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));