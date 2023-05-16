// import { useDispatch } from "react-redux";
import styles from "./TaskManagerPage.module.scss";
// import { addnewTask } from "../../redux/features/Tasks/TasksSilce";
import CreateTask from "./Components/CreateTask";
import TaskCollection from "./Components/TaskCollection";
import TaskControlPanel from "./Components/TaskControlPanel";

const TaskManagerPage = () => {
  return (
    <>
      <main className={styles.TaskManagerPage}>
        <div className={styles.Container}>
          <CreateTask />
          <TaskCollection />
          <TaskControlPanel />
        </div>
      </main>
    </>
  );
};

export default TaskManagerPage;
