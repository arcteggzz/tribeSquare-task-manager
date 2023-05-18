import styles from "../styles/SingleTask.module.scss";
import complete_checkmark from "../images/complete_checkmark.png";
import incomplete_checkmark from "../images/incomplete_checkmark.png";
import { useDispatch } from "react-redux";
import {
  toggleComplete,
  deleteTask,
} from "../../../redux/features/Tasks/TasksSilce";
import {
  openEditTaskModal,
  setEditModalDetails,
} from "../../../redux/features/Modals/ModalsSlice";

type SingleTaskProp = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const SingleTask = ({ title, description, completed, id }: SingleTaskProp) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDelete = (num: number) => {
    dispatch(deleteTask({ id: num }));
  };
  const handleEdit = () => {
    dispatch(
      setEditModalDetails({
        oldDescription: description,
        oldId: id,
        oldTitle: title,
      })
    );
    dispatch(openEditTaskModal());
  };

  return (
    <>
      <article className={styles.SingleTask}>
        <div
          className={styles.completed_container}
          onClick={() => handleCompleteClick()}
        >
          <img
            src={completed ? complete_checkmark : incomplete_checkmark}
            alt={completed ? "complete icon" : "incomplete icon"}
          />
        </div>
        <div className={styles.title_container}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className={styles.buttons_container}>
          <button className={styles.edit_btn} onClick={() => handleEdit()}>
            Edit
          </button>
          <button
            className={styles.delete_btn}
            onClick={() => handleDelete(id)}
          >
            Del
          </button>
        </div>
      </article>
    </>
  );
};

export default SingleTask;
