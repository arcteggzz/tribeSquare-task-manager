import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createTaskModal: false,
  editTaskModal: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openCreateTaskModal: (state) => {
      state.createTaskModal = true;
    },
    closeCreateTaskModal: (state) => {
      state.createTaskModal = false;
    },
    openEditTaskModal: (state) => {
      state.editTaskModal = true;
    },
    closeEditaskModal: (state) => {
      state.editTaskModal = false;
    },
  },
});

export const {
  openCreateTaskModal,
  closeCreateTaskModal,
  openEditTaskModal,
  closeEditaskModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
