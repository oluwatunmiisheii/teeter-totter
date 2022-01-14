import React from 'react';
import "./index.css";

interface IProps {
  startGame: () => void;
  name: string;
  rightWeight: string;
  leftWeight: string;
  rightDistance: number;
  leftDistance: number;
}

const Controller: React.FC<IProps> = (props) => {
  return (
    <div className="controller">
      <div className="details">
        <p>weight: {props.leftWeight}</p>
        <p>distance: {props.leftDistance}</p>
      </div>
      <button onClick={props.startGame}>{props.name}</button>
      <div className="details">
        <p>weight: {props.rightWeight}</p>
        <p>distance: {props.rightDistance}</p>
      </div>
    </div>
  );
};


export default Controller;