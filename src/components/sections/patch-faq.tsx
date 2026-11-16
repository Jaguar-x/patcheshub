export function PatchFaq({ name, questions }: {
  name: string;
  questions: readonly (readonly [string, string])[];
}) {
  return (
    <section className="section-space patch-faq" aria-labelledby="patch-faq-title">
      <div className="page-container patch-faq-layout">
        <header>
          <p className="eyebrow">Before you order</p>
          <h2 id="patch-faq-title">{name} FAQ</h2>
        </header>
        <div className="patch-faq-list">
          {questions.map(([question, answer], index) => (
            <details className="patch-glass-card patch-faq-card" key={question} name="patch-faq" open={index === 0}>
              <summary>
                <span>{question}</span>
                <span className="patch-faq-toggle" aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
