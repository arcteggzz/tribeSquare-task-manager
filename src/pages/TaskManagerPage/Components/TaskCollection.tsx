import styles from "../styles/TaskCollection.module.scss";
import SingleTask from "./SingleTask";

const TaskCollection = () => {
  return (
    <>
      <main className={styles.TaskCollection}>
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
        {/* <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask /> */}
      </main>
    </>
  );
};

export default TaskCollection;
