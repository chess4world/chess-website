import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [pgn, setPgn] = useState("");

  async function saveGame() {
    await supabase.from("games").insert([{ pgn }]);
    alert("Game saved!");
    setPgn("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>My Chess Database</h1>
      <textarea
        rows="10"
        cols="60"
        value={pgn}
        onChange={(e) => setPgn(e.target.value)}
        placeholder="Paste PGN here"
      />
      <br />
      <button onClick={saveGame}>Save Game</button>
    </div>
  );
}

