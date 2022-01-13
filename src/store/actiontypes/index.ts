export enum ActionType  {
  GET_LEFT_POSITION = "GET_LEFT_POSITION",
  GET_RIGHT_POSITION = "GET_RIGHT_POSITION",
  GET_RIGHT_WEIGHT = "GET_RIGHT_WEIGHT",
  GET_LEFT_WEIGHT = "GET_LEFT_WEIGHT",
  GET_INNER_HEIGHT = "GET_INNER_HEIGHT",
  DEFAULT = "DEFAULT"
}

type Nullable<T> = T | undefined | null;

interface ILeftPosition {
  type: ActionType.GET_LEFT_POSITION;
  payload: number;
}

interface IRightPosition {
  type: ActionType.GET_RIGHT_POSITION;
  payload: number;
}

interface IRightWeight {
  type: ActionType.GET_RIGHT_WEIGHT;
  payload:  number;
}

interface ILeftWeight {
  type: ActionType.GET_LEFT_WEIGHT;
  payload: number;
}

interface IHeight {
  type: ActionType.GET_INNER_HEIGHT;
  payload: number;
}

interface IDefault {
  type: ActionType.DEFAULT;
  payload?: Nullable<number>;
}

export type Action = ILeftPosition | IRightPosition | IRightWeight | ILeftWeight | IHeight | IDefault;