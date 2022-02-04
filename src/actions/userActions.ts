export const CHANGE_USER = (value: {}) => {
  return { type: "CHANGE_USER", payload: { userInfo: value } };
};

export const CHANGE_REPOSITORIES = (value: Array<any>) => {
  return { type: "CHANGE_REPOSITORIES", payload: { repositories: value } };
};
