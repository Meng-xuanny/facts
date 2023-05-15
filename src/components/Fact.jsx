import React, { useState } from "react";
import { supabase } from "../supabase";

const Fact = ({
  setFacts,
  text,
  id,
  category,
  source,
  votesFalse,
  votesInteresting,
  votesMindblowing,
}) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const isDisputed = votesInteresting + votesMindblowing < votesFalse;

  const handleVoteInteresting = async () => {
    setIsUpdating(true);

    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ votesInteresting: votesInteresting + 1 })
      .eq("id", id)
      .select();

    setIsUpdating(false);
    if (!error)
      setFacts(
        (prevFacts) => prevFacts.map((f) => (f.id === id ? updatedFact[0] : f)) //return a new state array with the updated fact and the rest facts
      );
  };

  const handleVoteMindblowing = async () => {
    setIsUpdating(true);

    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ votesMindblowing: votesMindblowing + 1 })
      .eq("id", id)
      .select();

    setIsUpdating(false);
    if (!error)
      setFacts(
        (prevFacts) => prevFacts.map((f) => (f.id === id ? updatedFact[0] : f)) //return a new state array with the updated fact and the rest facts
      );
  };

  const handleVoteFalse = async () => {
    setIsUpdating(true);

    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ votesFalse: votesFalse + 1 })
      .eq("id", id)
      .select();

    setIsUpdating(false);
    if (!error)
      setFacts(
        (prevFacts) => prevFacts.map((f) => (f.id === id ? updatedFact[0] : f)) //return a new state array with the updated fact and the rest facts
      );
  };

  return (
    <li className="fact">
      <p>
        {isDisputed ? <span className="disputed">⛔️[DISPUTED]</span> : null}
        {text}
        <a className="source" href={source}>
          (Source)
        </a>
      </p>
      <span className={`tag ${category}`}>{category}</span>

      <div className="vote-buttons">
        <button
          onClick={handleVoteInteresting}
          title="interesting"
          className=""
          disabled={isUpdating}
        >
          👍{votesInteresting}
        </button>
        <button
          title="mind-blowing"
          className=""
          disabled={isUpdating}
          onClick={handleVoteMindblowing}
        >
          🤯{votesMindblowing}
        </button>
        <button
          title="incorrect"
          className=""
          disabled={isUpdating}
          onClick={handleVoteFalse}
        >
          ⛔️{votesFalse}
        </button>
      </div>
    </li>
  );
};

export default Fact;
