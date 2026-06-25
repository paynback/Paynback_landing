function Section({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-5 text-xl font-semibold text-white sm:text-2xl">
        {number}. {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function SubSection({ number, title, children }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-medium text-white/90">
        {number} {title}
      </h3>
      {children}
    </div>
  );
}

export { Section, SubSection };
