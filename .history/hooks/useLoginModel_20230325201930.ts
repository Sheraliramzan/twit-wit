import {create} from 'zustand';

interface LoginModelStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useLoginModel = create<LoginModelStro>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));