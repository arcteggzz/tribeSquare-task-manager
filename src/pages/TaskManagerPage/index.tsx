// import { useDispatch } from "react-redux";
import styles from "./TaskManagerPage.module.scss";
// import { addnewTask } from "../../redux/features/Tasks/TasksSilce";
import CreateTask from "./Components/CreateTask";
import TaskCollection from "./Components/TaskCollection";
import TaskControlPanel from "./Components/TaskControlPanel";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import CreateTaskModal from "./Components/CreateTaskModal";
import EditTaskModal from "./Components/EditTaskModal";

const TaskManagerPage = () => {
  const createTaskModalOpen = useSelector(
    (state: RootState) => state.modalsSliceReducer.createTaskModal
  );
  const editTaskModalOpen = useSelector(
    (state: RootState) => state.modalsSliceReducer.editTaskModal
  );

  return (
    <>
      <main className={styles.TaskManagerPage}>
        <div className={styles.Container}>
          <CreateTask />
          <TaskCollection />
          <TaskControlPanel />
        </div>
        {createTaskModalOpen ? (
          <div className={styles.modal_Container}>
            <CreateTaskModal />
          </div>
        ) : (
          <></>
        )}
        {editTaskModalOpen ? (
          <div className={styles.modal_Container}>
            <EditTaskModal />
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default TaskManagerPage;
