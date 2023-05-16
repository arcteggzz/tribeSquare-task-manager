import { useDispatch } from "react-redux";
import styles from "./TaskManagerPage.module.scss";
import { addnewTask } from "../../redux/features/Tasks/TasksSilce";

const TaskManagerPage = () => {
  const dispatch = useDispatch();

  const createRandom = () => {
    const fakeTask = {
      title: "Go to Market",
      description: "Buy everything",
      completed: false,
    };
    dispatch(addnewTask(fakeTask));
  };

  return (
    <>
      <main className={styles.TaskManagerPage}>
        <p>Tasks</p>
        <button onClick={() => createRandom()}>Add movie</button>
      </main>
    </>
  );
};

export default TaskManagerPage;
