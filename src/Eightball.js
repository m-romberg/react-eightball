import { getRandom } from "./random";
import React, { useState } from "react";
import "./Eightball.css";

/** Magic eightball -
 *
 * Props:
 * - answers - array of objects:
 *   [{ msg: "It is certain.", color: "green" }, ...]
 *
 * State:
 * - color: string color
 * - msg: string msg
 *
 * App -> Eightball
 */

function Eightball({ answers }) {

  // TODO: could use a single piece of state `answer` -
  // because color and msg are coupled
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");

  // TODO: log props
  console.log("Eightball", answers);

  function shake() {
    const randIndex = getRandom(answers.length);
    const { color, msg } = answers[randIndex];

    setColor(color);
    setMsg(msg);
  }

  const eightballStyles = {
    backgroundColor: color
  };

  return (
    <div className="Eightball" onClick={shake} style={eightballStyles}>
      <b className="Eightball-msg">{msg}</b>
    </div>
  );
}


export default Eightball;