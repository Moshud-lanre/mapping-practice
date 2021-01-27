import React from "react";
import Entry from "./Entry";
import Emoji from "../emojipedia";

const CreateEntry = (emoji) => {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      desc={emoji.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emoji.map(CreateEntry)}</dl>
    </div>
  );
}

export default App;
