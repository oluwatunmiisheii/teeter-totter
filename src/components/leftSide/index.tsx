import React, { useEffect, useState } from 'react';
import { getLeftPosition } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import RandomObject from '../randomObject/index';
import { RootState } from '../../store/reducer';


interface IProps {
	shape: number | undefined;
	weight: string;
	left: number;
	right: number;
	top?: number;
	calculateBalance: () => void;
	barOffsetTop: number;
}


const LeftSide: React.FC<IProps> = ({ shape, left, right, calculateBalance, weight, barOffsetTop }) => {
	const dispatch = useDispatch();
	const [top, setTop] = useState(-50);
	const height = useSelector((state: RootState) => state.innerHeight);

	/**
	 * change object top position with arrow keys
	 */
	const onKeyPressed = (e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>) => {
		switch (e.keyCode) {
			case 39:
				dispatch(getLeftPosition(right + 55));
				break;
			case 37:
				dispatch(getLeftPosition(left - 55));
				break;
			default:
				return true
		}
	};
	/**
	 * change object top position and listen arrow keys
	 */

	useEffect(() => {
		let interval: any;
		if (top + height + 40 < barOffsetTop - 50) {
			interval = setInterval(() => {
				const newTop = top + 10;
				setTop(newTop);
			}, 300);
		} else {
			calculateBalance();
		}
		document.addEventListener("keydown", e => onKeyPressed(e));
		return () => clearInterval(interval);
	});

	return (
		<RandomObject 
			shape={shape} 
			weight={weight} 
			top={top} 
			right={right} 
			left={left} 
			onKeyDown={onKeyPressed} 
		/>
	);
};


export default LeftSide;