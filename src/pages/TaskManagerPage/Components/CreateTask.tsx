import styles from "../styles/CreateTask.module.scss";

const CreateTask = () => {
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

        <button>Create New Task</button>
      </main>
    </>
  );
};

export default CreateTask;
