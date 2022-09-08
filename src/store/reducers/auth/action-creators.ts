import axios from "axios";
import { IUser } from "../../../models/IUser";
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
  SetUserAction
} from "./types";

export const AuthActionCreators = () => {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user
  });
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload
  });
  setIsLoading: (payload: boolean): SetLoadingAction => ({
    type: AuthActionEnum.SET_LOADING,
    payload
  });
  setEror: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload
  });
  login: (username: string, password: string) => async (
    dispatch: AppDispatch
  ) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const users = await axios.get("./users.json");
      console.log(users);
    } catch (e) {
      dispatch(AuthActionCreators.setEror("Error bla bla"));
    }
  };
  logout: () => async (dispatch: AppDispatch) => {};
};
