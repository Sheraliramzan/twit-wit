Editimport {create} from 'zustand';

interface EditModelStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const EditModel = create<EditModelStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));