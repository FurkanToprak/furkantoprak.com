import HR from "../components/HR";

function About() {
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
        I am an undergraduate student at Texas A&M University who is studying
        Computer Science and Mathematics. I always strive to absorb as much
        information as I can, in the hopes that it will one day benefit
        humanity. My latest interests are human cognition, data engineering,
        intelligent agents, distributed computation, game theory, evolutionary
        dynamics, and economics.
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
        <h5 style={{ textAlign: "center" }}>Books that have changed my life</h5>
        <ul>
          <li>A</li>
        </ul>
      </div>
    </div>
  );
}
export default About;
