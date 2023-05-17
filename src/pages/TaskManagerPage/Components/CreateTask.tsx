import styles from "../styles/CreateTask.module.scss";
import { openCreateTaskModal } from "../../../redux/features/Modals/ModalsSlice";
import { useDispatch } from "react-redux";
// import { RootState } from "../../../redux/app/store";

const CreateTask = () => {
  const dispatch = useDispatch();
  // const createTaskModalOpen = useSelector(
  //   (state: RootState) => state.modalsSliceReducer.createTaskModal
  // );

  return (
    <>
      <main className={styles.CreateTask}>
        <div className={styles.Header}>
          <h1>Personal Task Manager</h1>
          <p>
            Manage your tasks at a glance. Create, Update, Edit and Delete as
            you please
          </p>
        </div>

        <button onClick={() => dispatch(openCreateTaskModal())}>
          Create New Task
        </button>
      </main>
    </>
  );
};

export default CreateTask;
