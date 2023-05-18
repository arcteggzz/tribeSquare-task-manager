import styles from "./LandingPage.module.scss";
import assessment_image from "./images/assessment_image.png";

type LandingPageProps = {
  setShowManager: React.Dispatch<React.SetStateAction<string | null>>;
};

const LandingPage = ({ setShowManager }: LandingPageProps) => {
  const viewSubmission = () => {
    localStorage.setItem("firstView", "true");
    setShowManager("true");
  };

  return (
    <>
      <main className={styles.container}>
        <div className={styles.LandingPage}>
          <section>
            <h1>
              Esedere Oghenetega’s{" "}
              <span>Submission for TribeSquare Assessment</span>
            </h1>
            <div className={styles.description}>
              <p>Task Description:</p>
              <p>
                Created a comprehensive Task Manager application that allows
                users to perform some specified functions such as creating,
                editing, deleting and filtering their tasks based on their
                choice.
              </p>
              <p>
                Application was built using ReactTS, Redux, SCSS and hosted on
                Netlify and Vercel.
              </p>
              <p className={styles.warning_text}>
                Kindly note that this page will only show on your first visit to
                the website. This page will be hidden for Subsequent visits.
              </p>
            </div>
            <button
              className={styles.view_submission}
              onClick={() => viewSubmission()}
            >
              CLICK TO VIEW SUBMISSION
            </button>
          </section>
          <img src={assessment_image} alt="assessment_image" />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
