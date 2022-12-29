import React from "react";
import { Badge, Row, Col, Container, Alert } from "react-bootstrap";
import "./Commentary.css";

function Commentary(props) {
  const eventColor = {
    0: "secondary",
    1: "secondary",
    2: "secondary",
    3: "secondary",
    4: "info",
    5: "secondary",
    6: "success",
    "-1": "danger",
  };
  const overs = (index) => {
    return [Math.floor(index / 6), (index % 6) + 1];
  };
  const commentaryArray = props.events
    .slice(0)
    .reverse()
    .map((event, index) => {
      return (
        <Container key={index} className="spEffect">
          <h2 className="overEnd">
            {overs(props.events.length - index - 1)[
              overs(props.events.length - index - 1).length - 1
            ] == 6
              ? `
------------------ End of over ${
                  Number(overs(props.events.length - index - 1)[0]) + 1
                } ------------------`
              : ""}
          </h2>
          <Row>
            <Col>
              <Row>
                <Col className="overHolder">
                  <p>{`${overs(props.events.length - index - 1)[0]}.${
                    overs(props.events.length - index - 1)[1]
                  }`}</p>
                </Col>
                <Col className="eventHolder">
                  <h2>
                    <Badge bg={eventColor[String(event)]}>
                      {event == -1 ? "W" : event}
                    </Badge>
                  </h2>
                </Col>
              </Row>
            </Col>
            <Col className="comments" xs={10}>
              <p>
                <b> Afridi to Kohli.</b> Bam, that's what Kohli can do. Not a
                bad ball in terms of intent, digs it into that back-of-a-length
                zone, but it sits up just outside off.
              </p>
            </Col>
          </Row>
        </Container>
      );
    });
  return <div> {commentaryArray}</div>;
}

export default Commentary;
