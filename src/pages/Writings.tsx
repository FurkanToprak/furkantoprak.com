import React, { useState, useContext } from "react";
import { Accordion, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Theme from "../contexts/Theme";

interface WritingPostProps {
  title: string;
  content: string;
}

const writings: WritingPostProps[] = [
  { title: "test 1", content: "# Hello\n##me" },
  { title: "test 2", content: "`hello`" },
  { title: "test 3", content: "aaa" },
];

export function WritingPost(props: WritingPostProps) {
  const [hoveredPost, setHoveredPost] = useState(false);
  const useTheme = useContext(Theme);
  const isDark = useTheme.theme === "dark";
  return (
    <Accordion>
      <Accordion.Toggle
        eventKey="0"
        as={Card.Header}
        style={{
          width: "100%",
          textAlign: "center",
          border: hoveredPost
            ? `3px dashed ${isDark ? "#cea2ac" : "#25283d"}`
            : "3px solid rgba(0,0,0,0)",
        }}
        onMouseOver={() => {
          setHoveredPost(true);
        }}
        onMouseLeave={() => {
          setHoveredPost(false);
        }}
      >
        <u>{props.title}</u>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </Accordion.Collapse>
    </Accordion>
  );
}

export default function Writings() {
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        writings
      </h3>
      <div>
        {writings.map((value) => (
          <WritingPost {...value} />
        ))}
      </div>
    </div>
  );
}
