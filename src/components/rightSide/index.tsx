import React from 'react';
import RandomObject from "../randomObject";

interface IProps {
  shape: number | undefined;
  weight: string;
  right: number;
}

const RightSide: React.FC <IProps>= ({ shape, right, weight }) => {
  return (
    <RandomObject shape={shape} right={right} weight={weight} />
  );
};


export default RightSide;