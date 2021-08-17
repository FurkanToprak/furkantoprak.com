import { useContext, useState } from "react"
import { Accordion, Card } from "react-bootstrap";
import Theme from "../contexts/Theme";
const etcArray = [
    {
        title: "pseudorandom chord sequence that is barely audible over the rain",
        url: "https://www.youtube.com/embed/r0SgPPm4OAU"
    }
];

export default function Etc() {
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
                et cetera
            </h3>
            {
                etcArray.map((etcThing, indexDocument) => {
                    return <Accordion style={{ paddingTop: 10, paddingBottom: 10 }}>
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
                            <u>{etcThing.title}</u>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={`${indexDocument}`}>
                            <iframe width="100%" height={400} src={etcThing.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </Accordion.Collapse>
                    </Accordion>
                })
            }
        </div>
    );
}
