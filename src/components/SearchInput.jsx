import { useEffect, useRef, useCallback } from 'react';
import './SearchInput.css'; 

function SearchInput({ isOpen, onClose }) {
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    const handleClickOutside = useCallback((e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose();
    }
    }, [onClose]);

useEffect(() => {
    if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        inputRef.current?.focus();
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, [isOpen, handleClickOutside]);

    return (
    <div
        ref={containerRef}
        className={`search-input-wrapper ${isOpen ? 'open' : ''}`}
    >
        <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="search-input-header"
        />
    </div>
    );
}

export default SearchInput;
