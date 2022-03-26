import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John" },
  { id: "1", name: "Arlo" },
  { id: "2", name: "Ian" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUser = (state) => state.users;
export default usersSlice.reducer;
