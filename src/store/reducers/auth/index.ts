import { IUser } from "../../../models/IUser";
import { AuthState, AuthAction, AuthActionEnum } from "./types";

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: "",
  user: {} as IUser
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AuthActionEnum.SET_LOADING:
      return { ...state, isLoading: false };
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}
