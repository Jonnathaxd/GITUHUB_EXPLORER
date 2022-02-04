import React, { createContext, useReducer } from "react";
import {
  userInitialState,
  UserType,
  userRepositoryReducer,
} from "../reducers/userRepositoryReducer";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
  user: UserType;
};

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: userInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  user: userRepositoryReducer(state.user, action),
});

export const ConstextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
