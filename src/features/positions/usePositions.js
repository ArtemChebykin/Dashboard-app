import { useSelector } from "react-redux";

import { selectVisiblePositions } from "./positionSlice";
import { selectFilters } from "../filter/filterSlice";

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  return positions;
};
