import styles from "../styles/TaskControlPanel.module.scss";

const TaskControlPanel = () => {
  return (
    <>
      <section className={styles.TaskControlPanel}>
        <div className={styles.TaskManager_controls}>
          <button className={styles.show_all_btn}>Show All</button>
          <button className={styles.completed_btn}>Completed</button>
          <button className={styles.pending_btn}>Pending</button>
        </div>
        <div className={styles.TaskManager_details}>
          <div className={styles.text_box}>
            <h4>All:-</h4>
            <p> 5 Items</p>
          </div>
          <div className={styles.text_box}>
            <h4>Completed:-</h4>
            <p> 5 Items</p>
          </div>
          <div className={styles.text_box}>
            <h4>Pending:-</h4>
            <p> 5 Items</p>
          </div>
          <div className={styles.text_box}>
            <h4>Deleted:-</h4>
            <p> 5 Items</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskControlPanel;
