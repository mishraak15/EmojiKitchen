import React from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function EmojiInput({ setEmoji }) {
  return (
    <>
      <Picker data={data} onEmojiSelect={(e) => setEmoji(e?.native)} />
    </>
  );
}
