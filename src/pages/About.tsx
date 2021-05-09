import { Accordion, Card } from "react-bootstrap";
import HR from "../components/HR";
import { useState, useContext } from "react";
import Theme from "../contexts/Theme";
import mepng from "../components/Media/me.png";

function EmbedResume() {
  return (
    <iframe
      title="my resume"
      src="https://drive.google.com/file/d/1rAkabK41Bc8SnQ_r8izUcFF3LqfXoM9V/preview"
      width="100%"
      height={300}
    ></iframe>
  );
}

const books: [string, string][] = [
  ["The Gulag Archipelago", "Aleksandr Solzhenitsyn"],
  ["Man's Search for Meaning", "Viktor Frankl"],
  ["Harry Potter and the Sorcerer's Stone", "J. K. Rowling"],
  ["Evolutionary dynamics", "Martin A. Nowak"],
  ["Beyond Good and Evil", "Frederich Nietzche"],
  [
    "Hands-On Machine Learning with Scikit-Learn & TensorFlow",
    "Aurelien Geron",
  ],
  ["Give People Money", "Annie Lowrey"],
  ["1984", "George Orwell"],
  ["Discrete Mathematics and Its Applications", "Kenneth H. Rosen"],
  ["Maps of Meaning", "Jordan B. Peterson"],
  ["On The Social Contract", "Jean-Jacques Rousseau"],
  ["You Are Not So Smart", "David McRaney"],
  ["The Count of Monte Cristo", "Alexandre Dumas"],
  ["Night", "Elie Wiesel"],
  [
    "The Federalist Papers",
    "Plubius (Alexander Hamilton, John Jay, and James Madison)",
  ],
  ["Hamlet", "William Shakespeare"],
  ["Hard Times", "Charles Dickens"],
  ["The Trial", "Franz Kafka"],
  ["Pimp", "Iceberg Slim"],
  ["The Prince", "Niccolo Machiavelli"],
];
function ReadingList() {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li>
            <i>
              <u>{book[0]}</u>
            </i>{" "}
            by {book[1]}
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
  const isDark = useTheme.theme === "dark";
  const [hoveredResume, setHoveredResume] = useState(false);
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
        <h5 style={{ textAlign: "center" }}>research & work</h5>
        I have worked in a number of labs, primarily working with AI,
        neuroevolution, data analysis, bacteria resistance, and viral genomics.
        Next year, I plan on working in a robotics lab where I will likely work
        on motion planning and computational geometry.
        <br />
        <br />
        In the past I have worked at SynchroGrid, developing software tools for
        Electrical Engineers to protect power grids. My code has been shipped to
        some of the largest power companies in the nation.
        <br />
        <br />
        This summer I will be working as an Intern Software Engineer at Capital
        One, where I hope to develop excellent software with some of the
        brightest in finance technology.
      </div>
      <HR />
      <div>
        <h5 style={{ textAlign: "center" }}>skills & qualifications</h5>
        <div>
          <Accordion>
            <Accordion.Toggle
              eventKey="0"
              as={Card.Header}
              style={{
                width: "100%",
                textAlign: "center",
                border: `3px ${hoveredResume ? "dashed" : "solid"} ${
                  isDark ? "white" : "black"
                }`,
              }}
              onMouseOver={() => {
                setHoveredResume(true);
              }}
              onMouseLeave={() => {
                setHoveredResume(false);
              }}
            >
              <u>resume</u>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <EmbedResume />
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
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
