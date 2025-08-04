import { useState } from "react";
import './FAQSection.css'

const faqs = [
    {
        question: "Do you offer dairy-free or vegan options?",
        answer: "Yes, we offer a variety of dairy-free and vegan ice cream options."
    },
    {
        question: "Can I order ice cream online?",
        answer: "Absolutely! You can place orders through our website or app."
    },
    {
        question: "What ingredients do you use in your ice cream?",
        answer: "We use natural ingredients, fresh fruits, and premium dairy products."
    },
    {
        question: "Do you have nutritional information available?",
        answer: "Yes, nutritional information is available on request."
    },
    {
        question: "Do you have gluten-free ice cream?",
        answer: "Yes, we have gluten-free options."
    },
    {
        question: "Can I book your store for private events?",
        answer: "Yes, please contact us to discuss your event requirements."
    },
];

function FAQSection() {
    const[openIndex, setOpenIndex] = useState(null) //встановлюємо стан і номер питання яке відкрите

    const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };

    return (
    <div className="faq-container">
        <h2 className="faq-title">
            Frequently Asked <span>Questions</span>
        </h2>
        <p className="faq-subtitle">
            Some of the queries you want to know about us.
        </p>
        <div className="faq-list">
            {faqs.map((faq, index) => (
            <div
                key={index}
                className={`faq-item ${openIndex === index ? 'active' : ''}`} //якщо питання відкрите то додається клас active, якщо закрите то нічого
                onClick={() => toggleFAQ(index)}
            >
                <div className="faq-question">{faq.question}</div>
                {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
                )}
            </div>
            ))}
        </div>
        </div>
    );
}

export default FAQSection

