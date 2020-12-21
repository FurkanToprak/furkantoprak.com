import { Accordion, Card } from "react-bootstrap";
import HR from "../components/HR";
import { useState } from "react";
function About() {
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
        <a href="/writings">
          <u>writings</u>
        </a>{" "}
        tab for my essays and papers.
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
                border: hoveredResume
                  ? "3px dashed white"
                  : "3px solid rgba(0,0,0,0)",
              }}
              onMouseOver={() => {
                setHoveredResume(true);
              }}
              onMouseLeave={() => {
                setHoveredResume(false);
              }}
            >
              <u>Toggle Resume</u>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Resume Here</Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
      <HR />
      <div>
        <h5 style={{ textAlign: "center" }}>books that have changed my life</h5>
        <ul>
          <li>
            <u>
              <i>Harry Potter and the Sorcerer's Stone</i>
            </u>{" "}
            by J. K. Rowling
          </li>
          <li>
            <u>
              <i>Evolutionary Dynamics</i>
            </u>{" "}
            by Martin A. Nowak
          </li>
          <li>
            <u>
              <i>Beyond Good and Evil</i>
            </u>{" "}
            by Frederich Nietzche
          </li>
          <li>
            <u>
              <i>Hands-On Machine Learning with Scikit-Learn & TensorFlow</i>
            </u>{" "}
            by Aurelien Geron
          </li>
          <li>
            <u>
              <i>Give People Money</i>
            </u>{" "}
            by Annie Lowrey
          </li>
          <li>
            <u>
              <i>1984</i>
            </u>{" "}
            by George Orwell
          </li>
          <li>
            <u>
              <i>Discrete Mathematics and Its Applications</i>
            </u>{" "}
            by Kenneth H. Rosen
          </li>
          <li>
            <u>
              <i>Maps of Meaning</i>
            </u>{" "}
            by Jordan B. Peterson
          </li>
          <li>
            <u>
              <i>On The Social Contract</i>
            </u>{" "}
            by Jean-Jacques Rousseau
          </li>
          <li>
            <u>
              <i>You Are Not So Smart</i>
            </u>{" "}
            by David McRaney
          </li>
          <li>
            <u>
              <i>A Wrinkle In Time</i>
            </u>{" "}
            by Madeleine L'Engle
          </li>
          <li>
            <u>
              <i>The Count of Monte Cristo</i>
            </u>{" "}
            by Alexandre Dumas
          </li>
          <li>
            <u>
              <i>Night</i>
            </u>{" "}
            by Elie Wiesel
          </li>
          <li>
            <u>
              <i>Hamlet</i>
            </u>{" "}
            by William Shakespeare
          </li>
          <li>
            <u>
              <i>Hard Times</i>
            </u>{" "}
            by Charles Dickens
          </li>
        </ul>
      </div>
    </div>
  );
}
export default About;
