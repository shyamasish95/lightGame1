import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  var intervall;
  const [innercir, setInnerCir] = useState([]);
  const [activeBall, setActiveBall] = useState();
  let [score, setScore] = useState(0);

  let circles = [];
  useEffect(() => {
    for (let i = 1; i <= 40; i++) {
      circles.push(i);
    }
    setInnerCir(circles);
    intr();
    return () => clearInterval(intervall);
  }, []);
  const intr = () => {
    intervall = setInterval(timer, 2000);
  };
  const timer = () => {
    var activeId = Math.floor(Math.random() * 41);
    setActiveBall(activeId);
  };
  const handleClick = (i) => (e) => {
    if (e.currentTarget.id === i) {
      console.log("inside if");
      setScore(++score);
    } else {
      console.log("inside else");
      setScore(--score);
    }
  };
  console.log(score);
  return (
    <div className="container">
      {innercir.map((i) => (
        <div
          id={i}
          onClick={handleClick(i)}
          className={activeBall === i ? "active inner" : "inner"}
        />
      ))}
    </div>
  );
}
