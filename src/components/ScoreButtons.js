import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "react-bootstrap";
import "./ScoreButtons.css";
function ScoreButtons(props) {
  function test() {
    console.log("Working fine");
  }

  return (
    <Button variant="outline-light" className="scoreButtons">
      +0
    </Button>
  );
}

export default ScoreButtons;
