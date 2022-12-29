import "bootstrap/dist/css/bootstrap.min.css";
import "./Scoreboard.css";
import { Container, Badge, Figure } from "react-bootstrap";

function Scoreboard(props) {
  return (
    <div className="shape">
      <h6>
        <i class="fas fa-edit"></i>
      </h6>
      <h2 className="TeamName">
        <Badge className="teamName" bg="light" text="dark">
          {" "}
          {props.teamName}
          <sup className="active">{props.current == true ? "^" : ""}</sup>
          <sup className="inactive">{props.current == false ? "^" : ""}</sup>
        </Badge>
      </h2>
      <h2>
        {props.runs}/<span className="wickets">{props.wickets}</span>
      </h2>
      <h4>
        Overs : {props.over}.{props.balls}
      </h4>
      <h5>RR: {props.runRate}</h5>

      <div className="comment">
        <h6 className="commentsText">{props.comments}</h6>
      </div>
    </div>
  );
}

export default Scoreboard;
