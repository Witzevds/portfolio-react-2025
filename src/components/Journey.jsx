import React from "react";
import "./Journey.css";

const Column = ({ title, count, items }) => (
  <div className="journey-column reveal">
    <div className="journey-column-head">
      <h3 className="journey-column-title">{title}</h3>
      <span className="journey-column-meta">
        {String(count).padStart(2, "0")} entries
      </span>
    </div>
    <ol className="journey-list">
      {items.map((item, idx) => (
        <li className="journey-item" key={idx}>
          <span className="journey-item-period">{item.period}</span>
          <h4 className="journey-item-title">{item.title}</h4>
          <div className="journey-item-place">{item.place}</div>
          {item.description && (
            <p className="journey-item-description">{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  </div>
);

const Journey = ({ journey }) => {
  if (!journey) return null;
  const { education = [], experience = [] } = journey;

  return (
    <section className="section" id="journey">
      <div className="reveal">
        <div className="section-eyebrow">Path so far</div>
        <h2 className="section-title">
          Journey<span className="accent">.</span>
        </h2>
      </div>

      <div className="journey-grid">
        <Column
          title="Experience"
          count={experience.length}
          items={experience}
        />
        <Column
          title="Education"
          count={education.length}
          items={education}
        />
      </div>
    </section>
  );
};

export default Journey;
