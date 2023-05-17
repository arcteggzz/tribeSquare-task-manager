import { configureStore } from "@reduxjs/toolkit";
import tasksSliceReducer from "../features/Tasks/TasksSilce";
import modalsSliceReducer from "../features/Modals/ModalsSlice";
import { singleTaskType } from "../../types/Tasks";

export interface RootState {
  modalsSliceReducer: {
    createTaskModal: boolean;
    editTaskModal: boolean;
  };
  tasksSliceReducer: singleTaskType[];
}

const store = configureStore({
  reducer: { tasksSliceReducer, modalsSliceReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
