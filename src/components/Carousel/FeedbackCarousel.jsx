import { useState } from 'react';
import './FeedbackCarousel.css'
import QuoteImg from '../../assets/images/quote-image.svg'

//додати таймер, щоб карусель сама крутилась
const customers = [
    {
    name: 'Kevin Andrew',
    role: 'Happy Customer',
    text: 'I’ve traveled a lot and tried ice cream in many countries, but nothing compares to what I found here. The texture is unbelievably smooth, and the flavors are rich without being overpowering. You can actually taste real ingredients — like fresh strawberries, creamy vanilla beans, and rich Belgian chocolate. I keep coming back not just because it’s delicious, but because each scoop feels crafted with care and passion.',
    stars: 5,
    },
    {
    name: 'Emma Stone',
    role: 'Ice Cream Lover',
    text: 'As a food blogger, I’m constantly on the hunt for unique culinary experiences — and this ice cream absolutely blew me away. From the moment you walk in and see the colorful selection to the last bite of your cone, it’s an experience. My personal favorite is the salted caramel swirl — it’s perfectly balanced, sweet and salty, with buttery undertones. It’s clear that every flavor here is made with attention to detail and love.',
    stars: 4,
    },
    {
    name: 'Carlos Diaz',
    role: 'Sweet Fan',
    text: 'This place has completely redefined what I thought ice cream could be. It’s not just dessert — it’s an art form. The presentation is stunning, the staff is friendly and passionate, and the taste… out of this world. I especially love the seasonal flavors that rotate throughout the year — each one is a new adventure. Trust me, you haven’t really had ice cream until you’ve had it here.',
    stars: 5,
    }
];
    function FeedbackCarousel() {
    const [index, setIndex] = useState(0);
    const current = customers[index];

    return (
    <div className="carousel-box">
        <h2 className="carousel-title">
        Hear from Our <span>Happy <br /> Ice Cream</span> Lovers
        </h2>

        <div className="feedback-box">
            <div className="background-image">
                <img src={QuoteImg} alt="quote-image"  />
            </div>
            <div className="feedback-text-review">
                <p className="feedback-text">"{current.text}"</p>
                <div className="name">{current.name}</div>
                <div className="role">{current.role}</div>
            </div>
            <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" fill={i < current.stars ? '#f0bb40' : '#ddd'}>
                <path d="M12 17l-6 3.6L7.7 13.9 2.5 9.4 9.4 8.9 12 2.5 14.6 8.9 21.5 9.4 16.3 13.9 18 20.6z" />
            </svg>
            ))}
        </div>

        <div className="dots">
            {customers.map((_, i) => (
            <div
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
            ></div>
            ))}
        </div>
        </div>
    </div>
    );
}

export default FeedbackCarousel

