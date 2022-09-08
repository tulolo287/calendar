import { IUser } from "../../../models/IUser";
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
  SetUserAction
} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";


export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth
  }),
  setIsLoading: (payload: boolean): SetLoadingAction => ({
    type: AuthActionEnum.SET_LOADING,
    payload
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload
  }),
  setLogin: (username: string, password: string) => ({
    type: AuthActionEnum.SET_LOGIN,
    payload: async function() {
      const users = await axios.get("./users.json")
      console.log(users.data)
    }()
      
    
  })
}
