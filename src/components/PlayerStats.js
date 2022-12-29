import React from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import "./PlayerStats.css";

class PlayerStats extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="statsHeader">
            <p className="statsTitle">Player Statistics</p>
          </Accordion.Header>
          <Accordion.Body className="statsBody">
            <Row className="playerStats bold">
              <Col>
                <p>Bowler</p>
              </Col>
              <Col xs={1}>
                <p>Overs </p>
              </Col>
              <Col xs={1}>
                <p>Runs </p>
              </Col>
              <Col xs={1}>
                <p>Economy </p>
              </Col>
              <Col xs={1}>
                <p>Dots </p>
              </Col>
              <Col xs={1}>
                <p>SR </p>
              </Col>
            </Row>
            <Row className="playerStats">
              <Col>
                <p>James Anderson</p>
              </Col>
              <Col xs={1}>
                <p>2.5 </p>
              </Col>
              <Col xs={1}>
                <p>11 </p>
              </Col>
              <Col xs={1}>
                <p>2.1 </p>
              </Col>
              <Col xs={1}>
                <p>5 </p>
              </Col>
              <Col xs={1}>
                <p>11.0 </p>
              </Col>
            </Row>
            <Row className="playerStats">
              <Col>
                <p>Dale Steyn</p>
              </Col>
              <Col xs={1}>
                <p>2.0 </p>
              </Col>
              <Col xs={1}>
                <p>9 </p>
              </Col>
              <Col xs={1}>
                <p>3.0 </p>
              </Col>
              <Col xs={1}>
                <p>2 </p>
              </Col>
              <Col xs={1}>
                <p>16.0 </p>
              </Col>
            </Row>
            <br></br>
            {/* Batters */}
            <Row className="playerStats bold">
              <Col>
                <p>Batter</p>
              </Col>
              <Col xs={1}>
                <p>Runs </p>
              </Col>
              <Col xs={1}>
                <p>Balls </p>
              </Col>
              <Col xs={1}>
                <p>S/R</p>
              </Col>
              <Col xs={1}>
                <p>4s </p>
              </Col>
              <Col xs={1}>
                <p>6s </p>
              </Col>
            </Row>
            <Row className="playerStats">
              <Col>
                <p>Rohit Sharma</p>
              </Col>
              <Col xs={1}>
                <p>59 </p>
              </Col>
              <Col xs={1}>
                <p>42 </p>
              </Col>
              <Col xs={1}>
                <p>125 </p>
              </Col>
              <Col xs={1}>
                <p>2 </p>
              </Col>
              <Col xs={1}>
                <p>4 </p>
              </Col>
            </Row>
            <Row className="playerStats">
              <Col>
                <p>Virat Kohli</p>
              </Col>
              <Col xs={1}>
                <p>22</p>
              </Col>
              <Col xs={1}>
                <p>15 </p>
              </Col>
              <Col xs={1}>
                <p>150 </p>
              </Col>
              <Col xs={1}>
                <p>1</p>
              </Col>
              <Col xs={1}>
                <p>2 </p>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default PlayerStats;
