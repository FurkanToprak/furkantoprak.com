import { Accordion, Card } from "react-bootstrap";
import { useState, useContext } from "react";
import Theme from "../contexts/Theme";
import ThemeButton from "../components/ThemeButton";

function EmbedDocument(props: { title: string; src: string }) {
  return (
    <iframe
      title={props.title}
      src={props.src}
      width="100%"
      height={300}
    ></iframe>
  );
}

const skillsAndQualificationDocuments: {
  link: string;
  title: string;
}[] = [
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/1rAkabK41Bc8SnQ_r8izUcFF3LqfXoM9V/preview",
  },
];

function About() {
  const useTheme = useContext(Theme);
  const [hoveredDocument, setHoveredDocument] = useState(-1);
  const isDark = useTheme.theme === "dark";
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <a href="/#/turkish">
          View this page in Turkish
        </a>
      </div>

      <div>
        {skillsAndQualificationDocuments.map((document, indexDocument) => {
          return (
            <Accordion style={{ paddingTop: 10, paddingBottom: 10 }}>
              <Accordion.Toggle
                eventKey={`${indexDocument}`}
                as={Card.Header}
                style={{
                  width: "100%",
                  textAlign: "center",
                  border: `3px ${
                    hoveredDocument === indexDocument ? "dashed" : "solid"
                  } ${isDark ? "white" : "black"}`,
                }}
                onMouseOver={() => {
                  setHoveredDocument(indexDocument);
                }}
                onMouseLeave={() => {
                  setHoveredDocument(-1);
                }}
              >
                <u>{document.title}</u>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`${indexDocument}`}>
                <EmbedDocument title={document.title} src={document.link} />
              </Accordion.Collapse>
            </Accordion>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div style={{ fontSize: 30 }}>↑</div>
        <div
          style={{
            marginBottom: 60,
          }}
        >
          This doesn't need to be an accordion - in fact it's less accessible -
          but it's the sort of thing you do anyways to demonstrate that you can
          implement an onClick event and embed a PDF. I'm not even going to
          mention the the fact that the border becomes dashed when you hover
          over it, because it would be pathetic to point out such a miniscule
          detail.
        </div>
        <ThemeButton />
        <br />
        <div
          style={{
            marginTop: 20,
          }}
        >
          That being said, don't ever let anyone even <i>suggest</i> that your
          theme button is unnecessary. Come on, there's even a fun little
          sun/moon icon.
        </div>
        <a
          style={{
            marginTop: 100,
          }}
          href="https://www.youtube.com/watch?v=DGeAlAIjvLY"
        >
         This is the secret "oof" button that i put here because i'm too lazy
          to make some fun animations; at the very least you can't tell me that
          my website is indistinguishable from others... it's not a waste of my
          money to pay for this domain
        </a>
      </div>
    </div>
  );
}
export default About;
