
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ModalProvider from './components/ModalContext.jsx';

createRoot(document.getElementById('root')).render(
    <ModalProvider >
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ModalProvider>
    
)
