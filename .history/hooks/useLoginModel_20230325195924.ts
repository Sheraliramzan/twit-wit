import {create} from 'zustand';

interface LoginModel {
    isOpen: boolean;
    onOpen: () => void;
}