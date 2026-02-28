import { useState } from 'react';
import { FAQ_DATA } from '../data/faq';

function FAQItem({ item, isOpen, onClick }) {
    return (
        <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
            <button
                className="faq__question"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon" aria-hidden="true">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </button>
            <div className="faq__answer-wrapper">
                <div className="faq__answer-inner">
                    <div className="faq__answer">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    );
}

function FAQ() {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="faq" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">FAQ</span>
                    <h2 id="faq-title" className="section-header__title">
                        常見問答
                    </h2>
                    <p className="section-header__desc">
                        為您整理了最常見的問題與解答，幫助您更了解我們。
                    </p>
                </div>

                <div className="faq__list">
                    {FAQ_DATA.map((item) => (
                        <FAQItem
                            key={item.id}
                            item={item}
                            isOpen={openId === item.id}
                            onClick={() => handleToggle(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
