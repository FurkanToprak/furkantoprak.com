import React from "react";
import { quote } from "../components/Media/GrandInquisitorQuote"
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>
          <ReactTypingEffect
            text={quote}
            speed={35}
            eraseSpeed={100}
            eraseDelay={10000}
          />
        </h2>
      </div>
    </div>
  );
}
