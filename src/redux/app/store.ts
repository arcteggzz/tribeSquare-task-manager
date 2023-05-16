import { configureStore } from "@reduxjs/toolkit";
import tasksSliceReducer from "../features/Tasks/TasksSilce";

const store = configureStore({
  reducer: { tasksSliceReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
