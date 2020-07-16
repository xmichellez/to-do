import { Action } from "../actions/index";
import { SORT, VISIBILITY_FILTERS } from "../constants/index";
import { FilterState } from "../types/index";

const initialState: FilterState = {
  filter: {
    visibility: "SHOW_ALL",
    sort: "CHRONOLOGICALLY",
  },
};

export default function filterReducer(
  state: FilterState = initialState,
  action: Action
): FilterState {
  switch (action.type) {
    case VISIBILITY_FILTERS:
      return { filter: { ...state.filter, visibility: action.payload.filter } };
    case SORT:
      return { filter: { ...state.filter, sort: action.payload.sort } };
    default:
      return state;
  }
}
