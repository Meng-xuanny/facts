import React from "react";

import Fact from "./Fact";

const Facts = ({ facts, setFacts }) => {
  if (facts.length === 0) {
    return <h1>No facts for this category yet! Create the first one! :)</h1>;
  }

  return (
    <ul className="facts">
      {facts.map((fact) => (
        <Fact key={fact.id} {...fact} setFacts={setFacts} />
      ))}
    </ul>
  );
};

export default Facts;
