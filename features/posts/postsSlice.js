import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Redux toolkit",
    content: "A modern tool to use redux.",
  },
  { id: "2", title: "NVDIA graphics card", content: "Huge GPU price drop." },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
