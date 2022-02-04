import { reducerActionType } from "../types/reducerActionType";

export type UserType = {
  userInfo: { repos_url?: string; name?: string; login?: string };
  repositories: Array<any>;
};

export const userInitialState = {
  userInfo: {},
  repositories: [],
};

export const userRepositoryReducer = (
  state: UserType,
  action: reducerActionType
) => {
  switch (action.type) {
    case "CHANGE_USER":
      return { ...state, userInfo: action.payload.userInfo };
    case "CHANGE_REPOSITORIES":
      return { ...state, repositories: action.payload.repositories };
    default:
      return state;
  }
};
