import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: "positions",
  initialState: [],
  reducers: {
    addPositions: (_, action) => action.payload,
  },
});

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter((pos) => {
    const posFilters = [].concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools
    );
    return filters.every((filter) => posFilters.includes(filter));
  });
};

export const { addPositions } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;
