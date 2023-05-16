import styles from "../styles/SingleTask.module.scss";
import complete_checkmark from "../images/complete_checkmark.png";
import incomplete_checkmark from "../images/incomplete_checkmark.png";

const Category = () => {
  return (
    <>
      <div className={styles.category_buttton}>
        <button disabled>Urgent</button>
      </div>
    </>
  );
};

const SingleTask = () => {
  return (
    <>
      <article className={styles.SingleTask}>
        <div className={styles.completed_container}>
          <img src={complete_checkmark} alt="" />
        </div>
        <div className={styles.title_container}>
          <h4>Title</h4>
          <p>This is a long description</p>
        </div>
        <div className={styles.category_container}>
          <Category />
        </div>
        <div className={styles.buttons_container}>
          <button className={styles.edit_btn}>Edit</button>
          <button className={styles.delete_btn}>Del</button>
        </div>
      </article>
    </>
  );
};

export default SingleTask;
