import ReactMarkdown from "react-markdown";
import { WritingPostProps } from "./Writings";

export default function Writing(props: WritingPostProps) {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        <u>{props.title}</u>
      </h3>
      {props.contentType === "md" ? (
        <ReactMarkdown>{props.content}</ReactMarkdown>
      ) : (
        <iframe
          title={props.title}
          src={props.content}
          width="100%"
          height={600}
        ></iframe>
      )}
    </div>
  );
}
