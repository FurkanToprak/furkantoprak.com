import React, { useState } from "react";
import BookIcon from "./Icons/BookIcon";
import HeartIcon from "./Icons/HeartIcon";
import UpIcon from "./Icons/UpIcon";

export default function Footer() {
  const [hovering, setHovering] = useState(false);
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "2em",
      }}
    >
      <span
        style={{
          cursor: hovering ? "pointer" : "default",
        }}
        onClick={(event) => {
          event.preventDefault();
          window.scrollTo(0, 0);
        }}
        onMouseOver={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}
      >
        <UpIcon />
      </span>
      <span>
        Made with <HeartIcon /> & React
      </span>
      <span>
        <a href="https://www.paypal.me/FurkanToprak" target="_blank" rel="noreferrer">
          Buy my next <BookIcon />?
        </a>
      </span>
    </footer>
  );
}
