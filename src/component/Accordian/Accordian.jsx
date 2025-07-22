import React, { useState } from "react";
import "./Accordian.scss";
import { BiSolidDownArrow } from 'react-icons/bi';
const Accordian = () => {
  const [expanded, setExpanded] = useState(0);

  const faqData = [
    {
      question: 'What is coaching?',
      answer: 'Coaching is a collaborative process that helps you gain clarity, overcome internal blocks, and take aligned action toward your goals — all in a safe, non-judgmental space.'
    },
    {
      question: 'How is your coaching different?',
      answer: 'I blend modern coaching frameworks with Vedic wisdom, mindfulness, and deep presence to support meaningful, lasting inner shifts.'
    },
     {
      question: 'Do I need prior yoga experience?',
      answer: `Not at all! Sessions are tailored to your level, whether you're a complete beginner or experienced practitioner.`
    },
     {
      question: 'Are sessions online or in person?',
      answer: `Most sessions are conducted online, allowing you to join from anywhere in the world. In-person options may be available on request.`
    },
     {
      question: 'How do I know which program is right for me?',
      answer: `We can schedule a short clarity call to explore your needs and help you choose the offering that fits best.`
    },
     {
      question: 'What should I expect in a coaching session?',
      answer: `Each session is a safe space for reflection, insight, and action. You’ll be gently guided to uncover what’s true for you and move forward with clarity.`
    },
     {
      question: 'How do I get started?',
      answer: `Simply reach out via the contact form or book a discovery call. I’ll guide you through the next steps with ease.`
    },
      {
      question: 'Can I combine yoga and coaching?',
      answer: `Yes! My Mind-Body Package is designed exactly for that — integrating both practices for deeper alignment and wellbeing.`
    },
   
  ];

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    if (expanded === index) {
      setExpanded(0);
    } else {
      setExpanded(index);
    }
  };
  return (
    <div className="accordian-parent parent">
      <div className="accordian-cont cont">
        <div className="content-group">
          <div className="sec-indicator">FAQ</div>
          <h2>Know Before You Flow</h2>
          <p>
            Here are answers to the most common questions about sessions,
            programs, and what to expect.
          </p>
        </div>

        <div className="accordian">
           {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${expanded === index ? 'expanded' : ''}`}
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
                <span className="arrow-icon">
                  {expanded === index ? <BiSolidDownArrow /> : <BiSolidDownArrow />}
                </span>
              </div>
              {expanded === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
