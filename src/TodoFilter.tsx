import React from "react";
import Filter from "./Filter";
import { VISIBILITY_FILTERS } from "./constants/index";
import { SetFilter } from "./actions/index";
import { connect, useDispatch } from "react-redux";
import { RootState } from "./reducers";

interface Props {
  filter: string;
}

export const TodoFilter: React.FC<Props> = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Filter
        active={filter === VISIBILITY_FILTERS.SHOW_ALL}
        text="All"
        selected={VISIBILITY_FILTERS.SHOW_ALL}
        onClick={() => dispatch(SetFilter(VISIBILITY_FILTERS.SHOW_ALL))}
      />
      <Filter
        active={filter === VISIBILITY_FILTERS.SHOW_ACTIVE}
        text="Active"
        selected={VISIBILITY_FILTERS.SHOW_ACTIVE}
        onClick={() => dispatch(SetFilter(VISIBILITY_FILTERS.SHOW_ACTIVE))}
      />
      <Filter
        active={filter === VISIBILITY_FILTERS.SHOW_COMPLETED}
        text="Done"
        selected={VISIBILITY_FILTERS.SHOW_COMPLETED}
        onClick={() => dispatch(SetFilter(VISIBILITY_FILTERS.SHOW_COMPLETED))}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    filter: state.filterReducer.filter.visibility,
  };
};

export default connect(mapStateToProps)(TodoFilter);
