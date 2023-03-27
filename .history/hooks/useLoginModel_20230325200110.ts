import {create} from 'zustand';

interface LoginModel {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useLoginModel = create<LoginModel>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    
}));