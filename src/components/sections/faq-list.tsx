"use client";

import { useId, useState } from "react";
import { faqs } from "@/content/faqs";

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const groupId = useId();

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const questionId = `${groupId}-question-${index}`;
        const answerId = `${groupId}-answer-${index}`;

        return (
          <div className="faq-item" key={faq.question}>
            <h3>
              <button
                className="faq-question"
                type="button"
                id={questionId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {faq.question}
                <span className="faq-plus" aria-hidden="true" />
              </button>
            </h3>
            <div id={answerId} role="region" aria-labelledby={questionId} hidden={!isOpen}>
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
