export enum ActionType  {
  GET_LEFT_POSITION = "GET_LEFT_POSITION",
  GET_RIGHT_POSITION = "GET_RIGHT_POSITION",
  GET_RIGHT_WEIGHT = "GET_RIGHT_WEIGHT",
  GET_LEFT_WEIGHT = "GET_LEFT_WEIGHT",
  GET_HEIGHT = "GET_HEIGHT",
}

interface ILeftPosition {
  type: ActionType.GET_LEFT_POSITION;
  payload: number;
}

interface IRightPosition {
  type: ActionType.GET_RIGHT_POSITION;
  payload: string[];
}

interface IRightWeight {
  type: ActionType.GET_RIGHT_WEIGHT;
  payload: string ;
}

interface ILeftWeight {
  type: ActionType.GET_LEFT_WEIGHT;
  payload: string ;
}

interface IHeight {
  type: ActionType.GET_HEIGHT;
}

export type Action = ILeftPosition | IRightPosition | IRightWeight | ILeftWeight | IHeight;