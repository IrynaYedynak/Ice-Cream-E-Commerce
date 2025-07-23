import { useContext } from 'react';
import { ModalContext } from './ModalContext';

function useModal() {
    return useContext(ModalContext);
}

export default useModal
