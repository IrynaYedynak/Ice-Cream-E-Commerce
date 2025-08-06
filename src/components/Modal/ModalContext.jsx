import { createContext, useState } from 'react';

const ModalContext = createContext();

function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    function openModal(msg) {
    setMessage(msg);
    setIsOpen(true);
    }

    function closeModal() {
    setIsOpen(false);
    setMessage('');
    }

    return (
    <ModalContext.Provider value={{ isOpen, message, openModal, closeModal }}>
        {children}
    </ModalContext.Provider>
    );
}

export { ModalContext };
export default ModalProvider;

