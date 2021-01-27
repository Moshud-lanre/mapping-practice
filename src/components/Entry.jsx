import React from "react";

const Entry = ({ name, emoji, desc }) => {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emoji}
        </span>
        <span>{name}</span>
      </dt>
      <dd>{desc}</dd>
    </div>
  );
};

export default Entry;
