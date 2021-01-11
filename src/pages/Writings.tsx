import React, { useState, useContext } from "react";
import { Accordion, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Theme from "../contexts/Theme";

interface WritingPostProps {
  title: string;
  content: string;
  contentType: "md" | "pdf";
}

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
          border: `3px ${hoveredPost ? "dashed" : "solid"} ${
            isDark ? "white" : "black"
          }`,
          marginBottom: "20px",
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
        {props.contentType === "md" ? (
          <ReactMarkdown>{props.content}</ReactMarkdown>
        ) : (
          <iframe
            title={props.title}
            src={props.content}
            width="100%"
            height="400"
          ></iframe>
        )}
      </Accordion.Collapse>
    </Accordion>
  );
}

const writings: WritingPostProps[] = [
  {
    title: "On Confusion",
    content:
      'In recent days I have taken no pleasure from this human experience. I cannot be sure, but I believe this is beyond some simple manifestation of nihilism or some ill wish against life - I am in every sense confused. I am disoriented, helpless, and inexplicably sad.\n\n\nLately, I cannot distinguish the ideal of goodness from the arbitrary aesthetics I hold. I know this to be false, but I somehow cannot convince myself of this. I cannot erase this dirty suspicion that perhaps I am to blame for this. It is as if all morals I had held- and all those that should be held- were some forgotten whisper I once heard in the womb. The nauseating irony is that my name means "he who distinguishes right from wrong."What a cruel, blunt, tasteless joke!\n\n\nIs this desire to be constantly self-consistent, this contempt for myself, this loathing of human limitation yet another aesthetic? Is it some fascistic insistence that I should be free from fault? Why does my existence feel so primally frustrating? What grand conspiracy is acting against me that I should be so burdened by my own faculties? Is it my ignorance, naivety, curiosity, or cowardice that has produced this sickening impulse to know everything?\n\n\nI have been attempting to absorb information at a dizzying pace- it has now become this arduous chore to scan page after page from an increasing number of books; all in the hopes that somewhere I have missed this small secret of the universe that should make me understand; Even more foolishly, I have also been looking for secrets that could make me less miserable or even happy.\n\n\nToday a comforting thought dawned on me for the first time in a long time: that I cannot think of a conceivable reason to live without an optimistic outlook. To live believing I am doomed only for misery would be an insult to my human spirit. What use is there in living in such depths of gloom if I am the one who has consented to my own fortune?\n\n\nI know I must not betray my past self and actions; It is only fair to judge yourself by your capacity. The cruel compromise I have reached is something that any reasonable person would have easily reached: I will live the best I can.',
    contentType: "md",
  },
  {
    title: "Modeling Diseases, Mutations, and Vaccines as Interacting Species",
    content:
      "https://drive.google.com/file/d/1ng9NeOj_poo-raQb0E4GOag7ca5_L3rV/preview",
    contentType: "pdf",
  },
  {
    title: "This turned to That and said,",
    content:
      "I’ll meet my maker but let me meet yours.\n\nLet me sing him praises and feed him roars!\n\nI am left dry but for you he pours;\n\nWhy is this world not mine but yours?",
    contentType: "md",
  },
  {
    title: "The Emperor Wants No Clothes",
    content: "what most do i desire?\n\nall the nothingness!\n\nfrom things i always tire;\n\nbless my throne of less.\n\n\n\nunder my void power\n\nwhere all substance flees\n\nand meaning will cower\nmy sole law decrees:\n\n\n\nall things shall tire,\n\nand nothing shall bring bliss-\n\ni rule as your sire:\n\nking of nothingness!",
    contentType: "md",
  }
];

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
