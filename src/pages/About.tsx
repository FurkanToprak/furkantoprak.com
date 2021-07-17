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

const books: {
  title: string;
  author: string;
}[] = [
  { title: "The Gulag Archipelago", author: "Aleksandr Solzhenitsyn" },
  { title: "Man's Search for Meaning", author: "Viktor Frankl" },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J. K. Rowling" },
  { title: "Evolutionary dynamics", author: "Martin A. Nowak" },
  { title: "Beyond Good and Evil", author: "Frederich Nietzche" },
  {
    title: "Hands-On Machine Learning with Scikit-Learn & TensorFlow",
    author: "Aurelien Geron",
  },
  { title: "Give People Money", author: "Annie Lowrey" },
  { title: "1984", author: "George Orwell" },
  {
    title: "Discrete Mathematics and Its Applications",
    author: "Kenneth H. Rosen",
  },
  { title: "Maps of Meaning", author: "Jordan B. Peterson" },
  { title: "On The Social Contract", author: "Jean-Jacques Rousseau" },
  { title: "You Are Not So Smart", author: "David McRaney" },
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas" },
  { title: "Night", author: "Elie Wiesel" },
  {
    title: "The Federalist Papers",
    author: "Plubius (Alexander Hamilton, John Jay, and James Madison)",
  },
  { title: "Hamlet", author: "William Shakespeare" },
  { title: "Hard Times", author: "Charles Dickens" },
  { title: "The Trial", author: "Franz Kafka" },
  { title: "Pimp", author: "Iceberg Slim" },
  { title: "The Prince", author: "Niccolo Machiavelli" },
];
function ReadingList() {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li>
            <i>
              <u>{book.title}</u>
            </i>{" "}
            by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

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
      <div>
        <h5 style={{ textAlign: "center" }}>what keeps me busy</h5>
        I am an undergraduate student at Texas A&M University who is studying
        Computer Science and Mathematics. I always strive to absorb as much
        information as I can, in the hopes that it will one day benefit
        humanity. My latest interests are human cognition, data engineering,
        intelligent agents, distributed computation, game theory, evolutionary
        dynamics, and socioeconomics.
        <br />
        <br />I have lately taken up writing and will try to publish my writings
        on this website. You can visit the{" "}
        <a href="/#/writings">
          <u>writings</u>
        </a>{" "}
        tab for my essays and papers. If you have a project you would like me to
        collaborate on, shoot me an email.
      </div>
      <HR />
      <div>
        <h5 style={{ textAlign: "center" }}>research & work</h5>I am a coauthor
        in a publication! Head over to{" "}
        <u>
          <a href="/#/writings">writings</a>
        </u>{" "}
        to read it.
        <br />
        <br />
        I have worked in a number of labs, primarily working with AI, robots,
        neuroevolution, data analysis, bacteria resistance, and viral genomics.
        Next year, I will conduct research bias in Recommender Systems under
        James Caverlee at Texas A&M University.
        <br />
        <br />
        This summer I will be working as an Intern Software Engineer at Capital
        One, where I hope to develop excellent software with some of the
        brightest in finance technology.
        <br />
        <br />
        In the past I have worked at SynchroGrid, developing software tools for
        Electrical Engineers to protect power grids. My code has been shipped to
        some of the largest power companies in the nation.
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
      </div>
      <HR />
      <div>
        <h5 style={{ textAlign: "center" }}>books that have changed my life</h5>
        <ReadingList />
      </div>
    </div>
  );
}
export default About;
