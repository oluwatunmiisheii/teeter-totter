import React, { useState, useRef } from 'react';
import "./index.css";
import { getLeftPosition, getRightPosition, getRightWeight, getLeftWeight } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import LeftSide from "../../components/leftSide";
import RightSide from "../../components/rightSide";
import Controller from '../../components/controller/index';
import { RootState } from '../../store/reducer';

const TeeterTotter: React.FC = () => {
  const dispatch = useDispatch();
  const element = useRef<HTMLDivElement>(null);
  const rightWeight = useSelector((state: RootState) => state.rightWeight);
  const leftWeight = useSelector((state: RootState) => state.leftWeight);
  const [start, setStart] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [rightObj, setRightObj] = useState<number>();
  const [leftObj, setLeftObj] = useState<number>(0);
  const [bending, setBending] = useState<number>(0);
  const barOffsetTop = element?.current?.offsetTop ?? 0;

  const startGame = () => {
    setGameOver(false);
    setBending(0);
    setStart(true);
    setRightObj(CreateShape());
    setLeftObj(Math.floor(Math.random() * 2) + 1);
    dispatch(getRightPosition(shapePosition() * 55));
    dispatch(getLeftPosition(shapePosition() * 55));
    dispatch(getLeftWeight(shapeWeight()));
    dispatch(getRightWeight(shapeWeight()));
  };
  /**
   * distance from object to middle of bar
   * @type {number}
   */
  const rightObject = useSelector((state: RootState) => state.rightPosition);
  const right = useSelector((state: RootState) => state.leftPosition);
  const left = useSelector((state: RootState) => state.leftPosition);
  const rightObjDistance = rightObject ? 6 - rightObject / 55 : 0;
  const leftObjDistance = right ? 6 - right / 55 : 0;

  const CreateShape = () => {
    return Math.floor(Math.random() * 3) + 1
  };

  const shapeWeight = () => {
    return (Math.floor(Math.random() * 10) + 1).toString().concat('Kg');
  };
  
  const shapePosition = () => {
    return (Math.floor(Math.random() * 5) + 1);
  };

  /**
   * when object placed on bar
   *
   */
  const calculateBalance = () => {
    const rightObjWeight = Number(rightWeight?.slice(0, -2));
    const rightObjDistance = 6 - rightObject / 55;
    const leftObjWeight = Number(leftWeight?.slice(0, -2));
    const leftObjDistance = 6 - right / 55;
    const ratio = (leftObjWeight * leftObjDistance) / (rightObjWeight * rightObjDistance);
    if (ratio === 1) {
      setBending(0);
      setStart(false);
      setGameOver(false);
    } else if (ratio >= 1 && ratio < 3) {
      setBending(-10);
      setStart(false);
      setGameOver(false);
    } else if (ratio < 1 && 0.3 < ratio) {
      setBending(10);
      setStart(false);
      setGameOver(false);
    } else if (ratio >= 3) {
      setBending(-30);
      setGameOver(true);
      setStart(false);
    } else if (ratio <= 0.3) {
      setBending(30);
      setGameOver(true);
      setStart(false);
    }
  };

  const style = {
    transform: `skew(10deg,${bending}deg)`
  };

  return (
    <div className="container">
      <Controller 
        startGame={startGame}
        name={start ? 'Stop' : 'Start'}
        rightWeight={rightWeight} 
        leftWeight={leftWeight}
        leftDistance={leftObjDistance}
        rightDistance={rightObjDistance}
      />
      {!gameOver ? (
        <div className='container'>
          <div className="shapeContainer">
            {start && (
              <>
                <div className="leftSide">
                  <LeftSide 
                    shape={leftObj}
                    right={right}
                    left={left} 
                    calculateBalance={calculateBalance} 
                    weight={leftWeight} 
                    barOffsetTop={barOffsetTop} 
                  />
                </div>
                <div className="rightSide">
                  <RightSide shape={rightObj} right={rightObject} weight={rightWeight} />
                </div>
              </>
            )}
          </div>
          <div className="barContainer" style={style} ref={element}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <div className='base'></div>
        </div>
      ) : (
        <div>Game Over</div>
      )}
    </div>
  );
};


export default TeeterTotter;