import { ActionType, Action } from "../actionTypes";

interface IState {
  leftPosition: number;
  rightPosition: number;
  rightWeight: number;
  leftWeight: number;
  innerHeight: number;
}

const initialState: IState = {} as IState;

const initialAction: Action = {
  type: ActionType.DEFAULT,
  payload: null
}

export const reducer = (state: IState = initialState, action: Action = initialAction): IState => {
  switch (action.type) {
    case ActionType.GET_LEFT_POSITION:
      return {
        ...state,
        leftPosition: action.payload
      }
    case ActionType.GET_RIGHT_POSITION:
      return {
        ...state,
        rightPosition: action.payload
      }
    case ActionType.GET_RIGHT_WEIGHT:
      return {
        ...state,
        rightWeight: action.payload
      }
    case ActionType.GET_LEFT_WEIGHT:
      return {
        ...state,
        leftWeight: action.payload
      }
    case ActionType.GET_INNER_HEIGHT:
      return {
        ...state,
        innerHeight: action.payload
      }
    default:
      return state;
  }
}