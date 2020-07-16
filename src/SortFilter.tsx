import React from "react";
import Filter from "./Filter";
import { SORT } from "./constants/index";
import { Sort } from "./actions/index";
import { connect, useDispatch } from "react-redux";
import { RootState } from "./reducers";

interface Props {
  sort: string;
}

export const SortFilter: React.FC<Props> = ({ sort }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Filter
        active={sort === SORT.CHRONOLOGICALLY}
        text="Chronological"
        selected={SORT.CHRONOLOGICALLY}
        onClick={() => dispatch(Sort(SORT.CHRONOLOGICALLY))}
      />
      <Filter
        active={sort === SORT.REVERSE}
        text="Reverse"
        selected={SORT.REVERSE}
        onClick={() => dispatch(Sort(SORT.REVERSE))}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    sort: state.filterReducer.filter.sort,
  };
};

export default connect(mapStateToProps)(SortFilter);
