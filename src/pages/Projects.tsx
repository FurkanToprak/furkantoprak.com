import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Theme from "../contexts/Theme";
import MoneyIcon from "../components/Icons/MoneyIcon";
import DropIcon from "../components/Icons/DropIcon";
import SearchIcon from "../components/Icons/SearchIcon";
import VectorIcon from "../components/Icons/VectorIcon";
import ChatIcon from "../components/Icons/ChatIcon";
import SocialIcon from "../components/Icons/SocialIcon";
import YouTubeIcon from "../components/Icons/YouTubeIcon";
import HistoryIcon from "../components/Icons/HistoryIcon";

interface TimelineElementProps {
  isDark?: boolean;
  child: any;
  icon: any;
  date: string;
}

function TimelineElement(props: TimelineElementProps) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: props.isDark ? "#cea2ac" : "#25283d",
        borderRight: "2px solid white",
        color: props.isDark ? "black" : "white",
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${props.isDark ? "#cea2ac" : "#25283d"}`,
      }}
      date={props.date}
      iconStyle={{
        background: props.isDark ? "#cea2ac" : "#25283d",
        color: props.isDark ? "#25283d" : "#cea2ac",
      }}
      icon={props.icon}
    >
      {props.child}
    </VerticalTimelineElement>
  );
}

const projects: TimelineElementProps[] = [
  {
    child: <div>
      <h3>History++</h3>
      <ul>
        <li>
          A secure open-source Chrome Extension that helps developers find their most frequent resources.
        </li>
        <li>
          Sort by visit count, last visit, and title- right from the corner of your browser!
        </li>
        <li>
          Fast and reactive search/sort functions.
        </li>
      </ul>
    </div>,
    icon: <HistoryIcon />,
    date: "December 2021"
  },

  {
    child: (
      <div>
        <h3>Lost Inside Reddit</h3>
        <ul>
          <li>
            A 100% automated YouTube channel that posts the hottest content from Reddit.
          </li>
          <li>
            Built with in Python, Reddit API, and YouTube Data API.
          </li>
          <li>
            I have not made this open source (yet), as YouTube is cut-throat and I need a competitive edge {"<3"}.
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCHqMXbXi5UILOqH4EE4RNwQ"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the YouTube channel.</u>
            </a>
          </li>
        </ul>
      </div>
    ),
    icon: <YouTubeIcon />,
    date: "December 2021",
  },
  {
    child: (
      <div>
        <h3>smarTA</h3>
        <ul>
          <li>
            Developed, marketed, and sold ($4,000) an educational chat bot to be
            used at Texas A&M University.
          </li>
          <li>
            smarTA processes textbooks and syllabi to answer student's
            questions. This will let you focus on improving course content
            rather than spending time answering trivial questions.
          </li>
          <li>
            Built with in Tensorflow, Python, Flask, Heroku, MongoDB, Bolt,
            nltk, pdfminer, and Slack API.
          </li>
          <li>
            I have made this open source! Feel free to use this for your
            classroom.
          </li>
          <li>
            <a
              href="https://github.com/FurkanToprak/smarTA"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the Github Repo.</u>
            </a>
          </li>
        </ul>
      </div>
    ),
    icon: <SocialIcon />,
    date: "November 2020",
  },
  {
    child: (
      <div>
        <h3>bubl</h3>
        <ul>
          <li>
            A social media where you can share your favorite gifs, songs, and
            videos with your friends.
          </li>
          <li>
            Built with Python, React, Typescript, Flask, Firebase, YouTube API,
            Spotify API, GIPHY API, and Heroku.
          </li>
          <li>
            <a
              href="https://github.com/FurkanToprak/bubl"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the Github Repo.</u>
            </a>
          </li>
          <li>
            <a
              href="https://bubl-board.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the website.</u>
            </a>{" "}
            This might take a second to load.
          </li>
        </ul>
      </div>
    ),
    icon: <ChatIcon />,
    date: "April 2020 - Present",
  },
  {
    child: (
      <div>
        <h3>vectorspacemodel</h3>
        <ul>
          <li>
            A strongly-typed, light-weight library that allows for an
            object-orientated, high-level, efficient approach to Vector Space
            Model computations.
          </li>
          <li>Built with Typescript.</li>
          <li>Hundreds of installations!</li>
          <li>
            <a
              href="https://github.com/FurkanToprak/VectorSpaceModel"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the Github Repo.</u>
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/vectorspacemodel"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the npm package.</u>
            </a>
          </li>
        </ul>
      </div>
    ),
    icon: <VectorIcon />,
    date: "August 2020 - Present",
  },
  {
    child: (
      <div>
        <h3>okapibm25</h3>
        <ul>
          <li>
            A strongly-typed, lightweight implementation of the OkapiBM25
            information retrieval algorithm, available as an NPM package.
          </li>
          <li>Built with Typescript.</li>
          <li>Hundreds of installations!</li>
          <li>
            <a
              href="https://github.com/FurkanToprak/OkapiBM25"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the Github Repo.</u>
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/okapibm25"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the npm package.</u>
            </a>
          </li>
        </ul>
      </div>
    ),
    icon: <SearchIcon />,
    date: "August 2020 - Present",
  },
  {
    child: (
      <div>
        <h3>Morbidostat</h3>
        <ul>
          <li>
            I am maintainer of the world's only open-source software of the
            all-in-one Morbidostat/Turbidostat/Chemostat. I even invented my
            regime implementer, the Furgostat.
          </li>
          <li>Built with Python and C#.</li>
          <li>
            Made for labs in University of Texas at Southwestern Medical School.
          </li>
          <li>
            <a
              href="https://github.com/FurkanToprak/Furgostat"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the Github Repo.</u>
            </a>
          </li>
        </ul>
      </div>
    ),
    icon: <DropIcon />,
    date: "January 2019 - Present",
  },
  {
    child: (
      <div>
        <h3>ad.value()</h3>
        <ul>
          <li>
            Trained a YOLOv3 neural network to identify product placement on
            live TV and generate statistics for advertisements in order to
            invent a better pricing model.
          </li>
          <li>Built with Python, Tensorflow, OpenCV, and Keras</li>
          <li>Made for TAMU Datathon.</li>
          <li>
            <a
              href="https://devpost.com/software/ad-value"
              target="_blank"
              rel="noreferrer"
            >
              <u>Check out the Devpost.</u>
            </a>
          </li>
        </ul>
      </div>
    ),
    icon: <MoneyIcon />,
    date: "October 2019",
  },
];
function Projects() {
  const useTheme = useContext(Theme);
  const isDark = useTheme.theme === "dark";
  return (
    <div>
      <VerticalTimeline animate={true}>
        {projects.map((value) => (
          <TimelineElement {...{ ...value, isDark: isDark }} />
        ))}
      </VerticalTimeline>
    </div>
  );
}
export default Projects;
