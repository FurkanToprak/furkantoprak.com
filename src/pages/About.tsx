import { Accordion, Card } from "react-bootstrap";
import HR from "../components/HR";
import { useState, useContext } from "react";
import Theme from "../contexts/Theme";
import mepng from "../components/Media/me.png";

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
      title: "CV",
      link: "https://drive.google.com/file/d/1iqO64v-ssZLnBzaQv0_-rXM0wmxlrHoD/preview",
    },
    {
      title: "resume",
      link: "https://drive.google.com/file/d/1rAkabK41Bc8SnQ_r8izUcFF3LqfXoM9V/preview",
    },
  ];

function MePicture() {
  return <img height={300} src={mepng} alt="Me, on a hike." />;
}

function About() {
  const useTheme = useContext(Theme);
  const [hoveredDocument, setHoveredDocument] = useState(-1);
  const isDark = useTheme.theme === "dark";
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        about
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MePicture />
      </div>
      <HR />
      <div>
        <h5 style={{ textAlign: "center" }}>skills & qualifications</h5>
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
                    border: `3px ${hoveredDocument === indexDocument ? "dashed" : "solid"
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
      </div>
    </div>
  );
}
export default About;
