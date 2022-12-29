import Scoreboard from "./components/Scoreboard";
import ModalWindow from "./components/ModalWindow";
import Commentary from "./components/Commentary";
import ExtraSwitch from "./components/ExtraSwitch";
import PlayerStats from "./components/PlayerStats";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    teamA: {
      teamName: "MI",
      runs: 0,
      wickets: 0,
      over: 0,
      balls: 0,
      runRate: (0).toFixed(2),
      ifAllOut: false,
      inningsOver: false,
      eventLog: [],
      currentInnings: false,
    },
    teamB: {
      teamName: "MI",
      runs: 0,
      wickets: 0,
      over: 0,
      balls: 0,
      runRate: (0).toFixed(2),
      ifAllOut: false,
      inningsOver: false,
      eventLog: [],
      currentInnings: true,
    },
  };

  scoresUpdate(event) {
    // For Team A
    if (this.state.teamA.currentInnings) {
      // Other events
      if (event != -1) {
        if (!this.state.teamA.ifAllOut && this.state.teamA.over != 20) {
          this.setState({
            teamA: {
              ...this.state.teamA,
              runs: this.state.teamA.runs + event,
              over:
                this.state.teamA.balls == 5
                  ? this.state.teamA.over + 1
                  : this.state.teamA.over,
              balls:
                this.state.teamA.balls == 5 ? 0 : this.state.teamA.balls + 1,
              eventLog: [...this.state.teamA.eventLog, event],
            },
          });
        }
      }
      // Wicket event
      else {
        if (!this.state.teamA.ifAllOut && this.state.teamA.over != 20) {
          if (this.state.teamA.wickets == 9) {
            this.setState({
              teamA: {
                ...this.state.teamA,
                wickets: this.state.teamA.wickets + 1,
                over:
                  this.state.teamA.balls == 5
                    ? this.state.teamA.over + 1
                    : this.state.teamA.over,
                ifAllOut: true,
                balls:
                  this.state.teamA.balls == 5 ? 0 : this.state.teamA.balls + 1,
                eventLog: [...this.state.teamA.eventLog, -1],
              },
            });
          } else {
            this.setState({
              teamA: {
                ...this.state.teamA,
                wickets: this.state.teamA.wickets + 1,
                over:
                  this.state.teamA.balls == 5
                    ? this.state.teamA.over + 1
                    : this.state.teamA.over,
                balls:
                  this.state.teamA.balls == 5 ? 0 : this.state.teamA.balls + 1,
                eventLog: [...this.state.teamA.eventLog, -1],
              },
            });
          }
        }
      }
    } else {
      // Other events 1,2,3,4,5,6
      if (event != -1) {
        if (!this.state.teamB.ifAllOut && this.state.teamB.over != 20) {
          this.setState({
            teamB: {
              ...this.state.teamB,
              runs: this.state.teamB.runs + event,
              over:
                this.state.teamB.balls == 5
                  ? this.state.teamB.over + 1
                  : this.state.teamB.over,
              balls:
                this.state.teamB.balls == 5 ? 0 : this.state.teamB.balls + 1,
              eventLog: [...this.state.teamB.eventLog, event],
            },
          });
        }
      }
      // Wicket event
      else {
        if (!this.state.teamB.ifAllOut && this.state.teamB.over != 20) {
          this.setState({
            teamB: {
              ...this.state.teamB,
              wickets: this.state.teamB.wickets + 1,
              over:
                this.state.teamB.balls == 5
                  ? this.state.teamB.over + 1
                  : this.state.teamB.over,
              balls:
                this.state.teamB.balls == 5 ? 0 : this.state.teamB.balls + 1,
              eventLog: [...this.state.teamB.eventLog, -1],
            },
          });
        }
        if (this.state.teamB.wickets == 10) {
          this.setState({
            teamB: { ...this.state.teamB, ifAllOut: true },
          });
        }
      }
    }
  }

  undoEvent() {
    if (this.state.teamA.currentInnings) {
      if (this.state.teamA.balls + this.state.teamA.over !== 0) {
        this.setState({
          teamA: {
            ...this.state.teamA,
            runs:
              this.state.teamA.eventLog[this.state.teamA.eventLog.length - 1] !=
              -1
                ? this.state.teamA.runs -
                  this.state.teamA.eventLog[
                    this.state.teamA.eventLog.length - 1
                  ]
                : this.state.teamA.runs,
            wickets:
              this.state.teamA.eventLog[this.state.teamA.eventLog.length - 1] ==
              -1
                ? this.state.teamA.wickets - 1
                : this.state.teamA.wickets,
            over:
              this.state.teamA.balls == 0
                ? this.state.teamA.over - 1
                : this.state.teamA.over,
            balls: this.state.teamA.balls == 0 ? 5 : this.state.teamA.balls - 1,
            eventLog: this.state.teamA.eventLog.slice(
              0,
              this.state.teamA.eventLog.length - 1
            ),
            ifAllOut: this.state.teamA.wickets != 10 ? false : true,
          },
        });
      }
    } else {
      if (this.state.teamB.balls + this.state.teamB.over !== 0) {
        this.setState({
          teamB: {
            ...this.state.teamB,
            runs:
              this.state.teamB.eventLog[this.state.teamB.eventLog.length - 1] !=
              -1
                ? this.state.teamB.runs -
                  this.state.teamB.eventLog[
                    this.state.teamB.eventLog.length - 1
                  ]
                : this.state.teamB.runs,
            wickets:
              this.state.teamB.eventLog[this.state.teamB.eventLog.length - 1] ==
              -1
                ? this.state.teamB.wickets - 1
                : this.state.teamB.wickets,
            over:
              this.state.teamB.balls == 0
                ? this.state.teamB.over - 1
                : this.state.teamB.over,
            balls: this.state.teamB.balls == 0 ? 5 : this.state.teamB.balls - 1,
            eventLog: this.state.teamB.eventLog.slice(
              0,
              this.state.teamB.eventLog.length - 1
            ),
            ifAllOut: this.state.teamB.wickets != 10 ? false : true,
          },
        });
      }
    }
  }

  render() {
    return (
      // <div>
      //   <Details />
      // </div>
      <div className="aligner">
        <div className="aligner">
          <Row>
            <Col className="aligner scoreboard">
              <Scoreboard
                teamName="CSK"
                runs={this.state.teamA.runs}
                wickets={this.state.teamA.wickets}
                over={this.state.teamA.over}
                balls={this.state.teamA.balls}
                runRate={
                  (this.state.teamA.runs * 6) /
                  (this.state.teamA.over * 6 + this.state.teamA.balls)
                    ? (
                        (this.state.teamA.runs * 6) /
                        (this.state.teamA.over * 6 + this.state.teamA.balls)
                      ).toFixed(2)
                    : (0).toFixed(2)
                }
                comments="Yet to bat"
                current={this.state.teamA.currentInnings}
              ></Scoreboard>
            </Col>

            <Col className="aligner scoreboard">
              <Scoreboard
                teamName="MI"
                runs={this.state.teamB.runs}
                wickets={this.state.teamB.wickets}
                over={this.state.teamB.over}
                balls={this.state.teamB.balls}
                runRate={
                  (this.state.teamB.runs * 6) /
                  (this.state.teamB.over * 6 + this.state.teamB.balls)
                    ? (
                        (this.state.teamB.runs * 6) /
                        (this.state.teamB.over * 6 + this.state.teamB.balls)
                      ).toFixed(2)
                    : (0).toFixed(2)
                }
                comments={`Projected Score: ${
                  (this.state.teamB.runs * 6) /
                  (this.state.teamB.over * 6 + this.state.teamB.balls)
                    ? Math.floor(
                        (this.state.teamB.runs * 6 * 20) /
                          (this.state.teamB.over * 6 + this.state.teamB.balls)
                      )
                    : 0
                }`}
                current={this.state.teamB.currentInnings}
              ></Scoreboard>
            </Col>
          </Row>
        </div>
        {/* <Row>
          <Col xs={2}></Col>
          <Col>
            <PlayerStats />
          </Col>

          <Col xs={2}></Col>
        </Row> */}
        <section className="main aligner">
          <Container>
            {/*  Control buttons  */}
            <section className="controls">
              {/* Reset Button */}
              <ModalWindow
                callback={() => {
                  this.setState({
                    teamA: {
                      teamName: "MI",
                      runs: 0,
                      wickets: 0,
                      over: 0,
                      balls: 0,
                      runRate: (0).toFixed(2),
                      ifAllOut: false,
                      inningsOver: false,
                      eventLog: [],
                      currentInnings: false,
                    },
                    teamB: {
                      teamName: "MI",
                      runs: 0,
                      wickets: 0,
                      over: 0,
                      balls: 0,
                      runRate: (0).toFixed(2),
                      ifAllOut: false,
                      inningsOver: false,
                      eventLog: [],
                      currentInnings: true,
                    },
                  });
                }}
              ></ModalWindow>
              {/* Undo Button */}

              <Button
                variant="secondary"
                onClick={() => {
                  this.undoEvent();
                }}
              >
                <i class="fas fa-undo-alt"></i>
              </Button>
              {/* Save Button */}
              <Button variant="secondary">
                <i class="fas fa-save"></i>
              </Button>
              {/* Switch Innings */}
              <Button
                variant="secondary"
                onClick={() => {
                  if (this.state.teamA.currentInnings) {
                    this.setState({
                      teamA: {
                        ...this.state.teamA,
                        currentInnings: false,
                      },
                      teamB: {
                        ...this.state.teamB,
                        currentInnings: true,
                      },
                    });
                  } else {
                    this.setState({
                      teamA: {
                        ...this.state.teamA,
                        currentInnings: true,
                      },
                      teamB: {
                        ...this.state.teamB,
                        currentInnings: false,
                      },
                    });
                  }
                }}
              >
                <i class="fas fa-random"></i>
              </Button>
            </section>
            {/* <hr></hr> */}
            {/* <ExtraSwitch></ExtraSwitch>
              <h4>Extras</h4> */}
            {/* --------------0 Runs----------- */}
            <Button
              variant="outline-light"
              className="scoreButtons"
              onClick={() => {
                this.scoresUpdate(0);
              }}
            >
              +0
            </Button>
            {/* 1 Runs */}
            <Button
              variant="outline-light"
              className="scoreButtons"
              onClick={() => {
                this.scoresUpdate(1);
              }}
            >
              +1
            </Button>
            {/* 2 Runs */}
            <Button
              variant="outline-light"
              className="scoreButtons"
              onClick={() => {
                this.scoresUpdate(2);
              }}
            >
              +2
            </Button>
            {/* 3 Runs */}
            <Button
              variant="outline-light"
              className="scoreButtons"
              onClick={() => {
                this.scoresUpdate(3);
              }}
            >
              +3
            </Button>
            {/* 4 Runs */}
            <Button
              variant="outline-light"
              className="scoreButtons"
              onClick={() => {
                this.scoresUpdate(4);
              }}
            >
              +4
            </Button>
            {/* 5 Runs */}
            <Button
              variant="outline-light"
              className="scoreButtons"
              onClick={() => {
                this.scoresUpdate(5);
              }}
            >
              +5
            </Button>
            {/* 6 Runs */}
            <Button
              variant="outline-light"
              className="scoreButtons"
              onClick={() => {
                this.scoresUpdate(6);
              }}
            >
              +6
            </Button>
            {/* Wickets */}
            <Button
              variant="danger"
              className="scoreButtons"
              onClick={() => {
                this.scoresUpdate(-1);
              }}
            >
              +W
            </Button>
            <hr />
            <Commentary events={this.state.teamB.eventLog}></Commentary>
          </Container>
        </section>
      </div>
    );
  }
}

export default App;
