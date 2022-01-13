import { ActionType } from "../actionTypes";



export function getLeftPosition(value: number) {
  return {
    type: ActionType.GET_LEFT_POSITION,
    payload: value
  };
}

export function getRightPosition(value: number) {
  return {
    type: ActionType.GET_RIGHT_POSITION,
    payload: value
  };
}

export function getLeftWeight(value: number) {
  return {
    type: ActionType.GET_LEFT_WEIGHT,
    payload: value
  };
}

export function getRightWeight(value: number) {
  return {
    type: ActionType.GET_RIGHT_WEIGHT,
    payload: value
  };
}

export function getInnerHeight(value: number) {
  return {
    type: ActionType.GET_INNER_HEIGHT,
    payload: value
  };
}