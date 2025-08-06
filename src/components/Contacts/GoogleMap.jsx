import './GoogleMap.css';

function GoogleMap() {
    return (
    <div className="google-map-wrapper">
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7278.893966824675!2d24.01751768545141!3d49.83348217301892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add667f678cf7%3A0xefbb66b26c87f78d!2z0KTQsNC50L3RliDQm9GM0L7QtNC4!5e0!3m2!1suk!2sua!4v1754481255123!5m2!1suk!2sua"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
    );
}

export default GoogleMap;
