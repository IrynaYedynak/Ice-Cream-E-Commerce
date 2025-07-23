import { useState } from 'react';
import './ProductTabs.css'

function ProductTabs({ description, additionalInfo }) {
    const [active, setActive] = useState('description');

    return (
    <div className="tabs">
        <div className="tab-buttons">
        <button className={active === 'description' ? 'active' : ''} onClick={() => setActive('description')}>Description</button>
        <button className={active === 'additional' ? 'active' : ''} onClick={() => setActive('additional')}>Additional Information</button>
        </div>

        <div className="tab-content">
        {active === 'description' && <p>{description}</p>}
        {active === 'additional' && <p>{additionalInfo}</p>}
        </div>
    </div>
    );
}

export default ProductTabs