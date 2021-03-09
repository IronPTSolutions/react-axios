
function Section({ title, children }) {
  return (
    <section className="my-3">
      <h3 className="mb-5">{title}</h3>
      {children}
    </section>
  );
}

export default Section;
