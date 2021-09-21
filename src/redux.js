import { createStore } from "redux";

const initialState = {
  currentEntity: {
    id: "",
    name: "",
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "newEntity/id":
      return {
        ...state,
        currentEntity: {
          ...state.currentEntity,
          id: action.data,
        },
      };
    case "newEntity/name":
      return {
        ...state,
        currentEntity: {
          ...state.currentEntity,
          name: action.data,
        },
      };
    case "newEntity/reset":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
