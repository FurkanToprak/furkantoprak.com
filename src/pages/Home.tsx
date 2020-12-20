import React from "react";
import BugParticles from "../components/BugParticles";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>
          <ReactTypingEffect
            text={[
              "furkan toprak",
              "bug catcher",
              "2nd fastest reader in 4th grade",
              "stinkiest man alive",
              "aspiring übermensch",
              "possible ghost",
              "answers to none",
              "big boy",
              "human incarnation of the white rabbit",
              "mr. coffee breath",
              "barely living in the present",
              "likely to be arrested one day",
              "time traveler",
              "mental math enthusiast",
              "psuedo-intellectual",
              "the rat king",
              "mr. clean fanboy",
            ]}
            speed={45}
            eraseSpeed={40}
            eraseDelay={500}
          />
        </h2>
      </div>
      <BugParticles />
    </div>
  );
}
