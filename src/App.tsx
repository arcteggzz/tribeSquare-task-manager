import { useEffect, useState } from "react";
import TaskManagerPage from "./pages/TaskManagerPage/";
import LandingPage from "./pages/LandingPage/LandingPage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/app/store";

const App = () => {
  const allTasks = useSelector((state: RootState) => {
    return state.tasksSliceReducer;
  });
  const firstView = localStorage.getItem("firstView");
  const [showManager, setShowManager] = useState(firstView);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("allSavedTasks", JSON.stringify(allTasks));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  });

  return (
    <>
      {showManager === null ? (
        <div>
          <LandingPage setShowManager={setShowManager} />
        </div>
      ) : (
        <TaskManagerPage />
      )}
    </>
  );
};

export default App;
