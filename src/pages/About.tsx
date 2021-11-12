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
      title: "my CV",
      link: "https://drive.google.com/file/d/1iqO64v-ssZLnBzaQv0_-rXM0wmxlrHoD/preview",
    },
    {
      title: "my resume",
      link: "https://drive.google.com/file/d/1rAkabK41Bc8SnQ_r8izUcFF3LqfXoM9V/preview",
    },
    {
      title: "Certified Secure Software Engineer",
      link: "https://drive.google.com/file/d/1HEKpnp2kc-UNbFpOQW4nLV7h9T_Wb5_f/preview",
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
        <h5 style={{ textAlign: "center" }}>work & research</h5>
          <p>I'll be working at Google next year! I'll be located at the YouTube office in San Bruno.</p>
        <br />
        <p>
          This year, I am performing research on Explainability of Bias in Recommender Systems- under
          James Caverlee at Texas A&M University. Previously, I have worked in a number of labs, primarily working with ML,
          neuroevolution, data analysis, bacteria resistance, and viral genomics.
        </p>
        <br />
        <p>
          In the past, I have worked at Capital One as a Software Engineer Intern,
          where I developed highly scalable machine learning microservices that analyzed financial contracts.
          My work at Capital One is being used internally and in production.
          Additionally, I have worked at SynchroGrid, developing software tools for
          Electrical Engineers to protect power grids. My code has been shipped to
          some of the largest power companies in the nation.
        </p>
        <br />
        <p>
          I am a coauthor in a publication! Head over to{" "}
          <u>
            <a href="/#/writings">writings</a>
          </u>{" "}
          to read it.
        </p>
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
