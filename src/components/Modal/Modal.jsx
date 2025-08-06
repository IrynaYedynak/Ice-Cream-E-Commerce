import useModal from './useModal';
import './Modal.css'
import MainButton from '../MainButton';


function Modal() {
    const { isOpen, message, closeModal } = useModal();

    if (!isOpen) return null;

    return (
    <div className="modal-window">
        <div className="modal-content">
        <p>{message}</p>
        <MainButton 
        text='OK'
        onClick={closeModal}
        color='purple'
        />
        </div>
    </div>
    );
}
export default Modal
