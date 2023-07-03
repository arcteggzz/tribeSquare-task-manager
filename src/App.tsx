// import { useEffect, useState } from "react";
import TaskManagerPage from "./pages/TaskManagerPage/";
import LandingPage from "./pages/LandingPage/LandingPage";
// import { useSelector } from "react-redux";
// import { RootState } from "./redux/app/store";
import { Route, Routes } from "react-router-dom";

const App = () => {
  // const allTasks = useSelector((state: RootState) => {
  //   return state.tasksSliceReducer;
  // });
  // const firstView = localStorage.getItem("firstView");
  // const [showManager, setShowManager] = useState(firstView);

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.setItem("allSavedTasks", JSON.stringify(allTasks));
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // });

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks-view" element={<TaskManagerPage />} />
      </Routes>
    </>
  );
};

export default App;
