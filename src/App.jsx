import { useState, useEffect } from "react";
import "./App.css";
import getEmojiMixUrl from "emoji-mixer";
import EmojiInput from "./components/EmojiInput";

function App() {
  const [emoji1, setEmoji1] = useState("🤣");
  const [emoji2, setEmoji2] = useState("😍");
  const [mixedEmoji, setMixedEmoji] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    try {
      setError(false);
      setMixedEmoji(getEmojiMixUrl(emoji1, emoji2));
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, [emoji1, emoji2]);
  return (
    <>
      <h1>My Emoji Kitchen</h1>
      <div className="App">
        <div className="emoji-container">
          <div className="emoji">{emoji1}</div>
          <div className="sign">+</div>
          <div className="emoji">{emoji2}</div>
          <div className="sign">=</div>
          {error ? (
            <h3>Try with other Emoji</h3>
          ) : (
            <img className="mixed-emoji" src={mixedEmoji} alt="mixedEmoji" />
          )}
        </div>

        <div className="emoji-inp">
          <EmojiInput setEmoji={setEmoji1} />
          <EmojiInput setEmoji={setEmoji2} />
        </div>
      </div>
    </>
  );
}

export default App;
