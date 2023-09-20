import { JobPosition } from "./JobPosition";
import { useSelector, useDispatch } from "react-redux";
import { addFilter } from "store/filters/filter-actions";
import { selectFilters } from "store/filters/filter-selectors";
import { selectVisiblePositions } from "store/positions/position-selectors";

const JobList = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
