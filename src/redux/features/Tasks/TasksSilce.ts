import { createSlice } from "@reduxjs/toolkit";
import { singleTaskType } from "../../../types/Tasks";

const initialState: singleTaskType[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addnewTask: (state, action) => {
      const newTask = {
        id: +Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      state.push(newTask);
    },
    // setComplete: (state, action) => {
    //   state.tasks = action.payload;
    // },
  },
});

export const { addnewTask } = tasksSlice.actions;

// export const getAllTasks = (state: { tasks: { tasks: TaskType[] } }) =>
//   state.tasks.tasks;

export default tasksSlice.reducer;
