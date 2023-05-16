import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../../../types/Tasks";

export type taskStateSlice = {
  tasks: TaskType[];
};

const initialState: taskStateSlice = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addnewTask: (state, action) => {
      state.tasks = action.payload;
    },
    // setComplete: (state, action) => {
    //   state.tasks = action.payload;
    // },
  },
});

export const { addnewTask } = tasksSlice.actions;

export const getAllTasks = (state: { tasks: { tasks: TaskType[] } }) =>
  state.tasks.tasks;

export default tasksSlice.reducer;
